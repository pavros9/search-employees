import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss'

interface LoaderProps {
    className?: string
}
export const Loader = (props: LoaderProps) => {
    const { className } = props

    const array = Array(4).fill(0);
    return <>
        <div className={classNames(cls.Loader, {}, [className])}>
            {array.map(item => <div />)}
        </div>
    </>
}