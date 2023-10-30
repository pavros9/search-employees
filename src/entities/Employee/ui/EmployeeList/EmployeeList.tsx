import { Employee } from "entities/Employee/model/types/types"
import { EmployeeItem } from "../EmployeeItem/EmployeeItem"
import cls from './EmployeeList.module.scss'
import { useSelector } from "react-redux"
import { getSelectedEmployee } from "entities/Employee/model/selectors/getSelectedEmployee"
import { Virtuoso } from 'react-virtuoso'

interface EmployeeList {
    employees?: Employee[]
    onClick: (employee: Employee) => void
    label?: string
}

export const EmployeeList = (props: EmployeeList) => {
    const { employees, onClick, label } = props
    const selectedEmployee = useSelector(getSelectedEmployee)


    const renderEmployeeItem = (index: number, employee: Employee) => (
        <EmployeeItem idSelectedEmployee={selectedEmployee?.id}
            onClick={onClick}
            item={employee}
            key={employee.id}
            className={cls.item} />
    )

    return <>
        <h4 className={cls.title}>{label}</h4>
        <ul className={cls.EmployeeList}>
            {employees ? employees.length > 0 ? <Virtuoso
                style={{ height: '400px', top: '5px' }}
                data={employees}

                className={cls.list}
                itemContent={renderEmployeeItem}
            /> : <span className={cls.text}>ничего не найдено</span> : <span className={cls.text}>начните поиск</span>}


        </ul>
    </>
}