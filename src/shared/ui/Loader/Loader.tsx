
import cls from './Loader.module.scss'

export const Loader = () => {
    const array = Array(12).fill(0);

    return <div className={cls.ldsSpinner}>
        {array.map(item => <div />)}
    </div>
}