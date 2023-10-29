
import { Employee } from 'entities/Employee'
import cls from './EmployeeItem.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Ava from 'shared/assets/img/small-ava-empty.png'

interface EmployeeItemProps {
    item: Employee,
    className?: string,
    idSelectedEmployee?: number,
    onClick: (employee: Employee) => void
}
export const EmployeeItem = (props: EmployeeItemProps) => {
    const { item, className, onClick, idSelectedEmployee } = props
    return <li className={classNames(cls.EmployeeItem, { [cls.active]: idSelectedEmployee === item.id }, [className])} onClick={() => onClick(item)}>
        <div><img src={Ava} /></div>
        <div className={cls.description}>
            <div className={cls.username}> {item.username}</div>
            <div className={cls.mail}> {item.email}</div>
        </div>

    </li >
}