import { FC } from 'react'
import s from './IconBig.module.scss'

interface IIconBig {
    children?: any
}

const IconBig: FC<IIconBig> = (props) => {
    return (
        <div className={s.box}>
            {props.children}
        </div>
    )
}

export default IconBig