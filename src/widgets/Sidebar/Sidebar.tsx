import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { SearchEmployees } from 'features/SearchEmployees'

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props

    return <div className={classNames(cls.Sidebar, {}, [className])}>
        <SearchEmployees />
    </div>
}