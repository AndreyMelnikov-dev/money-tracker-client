import { FC } from 'react'
import s from './IconSmall.module.scss'

interface IIconSmall {
    children?: any
}

const IconSmall: FC<IIconSmall> = (props) => {
    return (
        <div className={s.box}>
            {props.children}
        </div>
    )
}

export default IconSmall