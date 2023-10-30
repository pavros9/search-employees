import { Employee } from 'entities/Employee/model/types/types'
import Ava from 'shared/assets/img/big-ava-empty.png'
import cls from './EmployeeCard.module.scss'

interface EmployeeCardProps {
    employee?: Employee
}
export const EmployeeCard = (props: EmployeeCardProps) => {
    const { employee } = props

    return <div className={cls.EmployeeCard}>
        <div className={cls.ava}>
            <img src={Ava} />
        </div>
        <div className={cls.description}>
            <h3 className={cls.title}>{employee?.name}</h3>
            <div>
                <div className={cls.item}>
                    <span className={cls.label}>email:</span>
                    <span className={cls.text}>{employee?.email}</span>
                </div>

                <div className={cls.item}>
                    <span className={cls.label}>phone:</span>
                    <span className={cls.text}>{employee?.phone}</span>
                </div>
            </div>

            <div className={cls.about}>
                <h4 className={cls.title}>О себе:</h4>
                <p className={cls.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    </div>
}