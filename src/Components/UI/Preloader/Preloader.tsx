import { FC } from 'react'
import s from './Preloader.module.scss'

interface IPreloader {
    children?: string
}

const Preloader: FC<IPreloader> = (props) => {
    return (
        <div className={`${s.box} f1 gray`}>
            <span>{props.children || 'Loading'}</span>
            <span className={s.dots}>
                <span>.</span><span>.</span><span>.</span>
            </span>
        </div>
    )
}

export default Preloader