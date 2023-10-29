import { Employee } from "entities/Employee/model/types/types"
import { EmployeeItem } from "../EmployeeItem/EmployeeItem"
import cls from './EmployeeList.module.scss'
import { useSelector } from "react-redux"
import { getSelectedEmployee } from "entities/Employee/model/selectors/getSelectedEmployee"

interface EmployeeList {
    employees: Employee[]
    onClick: (employee: Employee) => void
    label?: string
}

export const EmployeeList = (props: EmployeeList) => {
    const { employees, onClick, label } = props
    const selectedEmployee = useSelector(getSelectedEmployee)

    return <>
        <h4>{label}</h4>
        <ul className={cls.EmployeeList}>
            {employees.length > 0
                ? employees.map(employee => <EmployeeItem
                    idSelectedEmployee={selectedEmployee?.id}
                    onClick={onClick}
                    item={employee}
                    key={employee.id}
                    className={cls.item} />)
                : 'ничего не найдено'}
        </ul>
    </>
}