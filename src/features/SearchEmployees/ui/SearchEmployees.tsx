import { Input } from 'shared/ui/Input/Input'
import cls from './SearchEmployees.module.scss'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import { fetchEmployees } from '../model/services/fetchEmployees'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export const SearchEmployees = () => {
    const dispatch = useAppDispatch()

    const fetchData = (value: string) => {
        console.log(value)
        dispatch(fetchEmployees({}));
    }

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChange = (value: string) => {
        // console.log(value)
        debouncedFetchData(value)
    }

    return <>
        <Input label='Поиск сотрудников'
            onChange={onChange}
            className={cls.input}
            placeholder='Введите Id или имя ' />
    </>

}
