import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { SearchEmployees } from 'features/SearchEmployees'
import { Employee, EmployeeList, getEmployees } from 'entities/Employee'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { employeeActions } from 'entities/Employee/model/slice/employeeSlice'
import { useNavigate } from 'react-router-dom'

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props
    const employees = useSelector(getEmployees)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onClickItem = (employee: Employee) => {
        dispatch(employeeActions.setSelectedEmployee(employee))
        navigate('/profile')
    }

    return <div className={classNames(cls.Sidebar, {}, [className])}>
        <SearchEmployees />
        {employees && <EmployeeList employees={employees}
            onClick={onClickItem}
            label='Результаты' />}
    </div>
}