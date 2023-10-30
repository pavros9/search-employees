import { ReactNode } from "react"
import cls from './MainLayout.module.scss'
import { Sidebar } from "widgets/Sidebar/Sidebar"

interface MainLayoutProps {
    children: ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
    const { children } = props

    return <div className={cls.wrapper}>
        <div className={cls.topWrapper}>
            <div className={cls.logo}>Жилфонд</div>
            <div className={cls.user}>Пользователь</div>
        </div>
        <div className={cls.content}>
            <Sidebar className={cls.sidebar} />
            <div className={cls.page}>{children}</div>
        </div>

    </div>

}