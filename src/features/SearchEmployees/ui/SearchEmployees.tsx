import { Input } from 'shared/ui/Input/Input'
import cls from './SearchEmployees.module.scss'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import { fetchEmployees } from '../model/services/fetchEmployees'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { createQueryParams } from '../lib/createQueryParams'
import { employeeActions } from 'entities/Employee/model/slice/employeeSlice'
import { useNavigate } from 'react-router-dom'

export const SearchEmployees = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const fetchData = (value: string) => {
        const config = createQueryParams(value)

        if (config) {
            dispatch(fetchEmployees(config))
        } else {
            dispatch(employeeActions.reset())
            navigate('/')
        }

    }

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChange = (value: string) => {
        debouncedFetchData(value)
    }

    return <>
        <Input label='Поиск сотрудников'
            onChange={onChange}
            className={cls.input}
            placeholder='Введите Id или имя ' />
    </>

}
