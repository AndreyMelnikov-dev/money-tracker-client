import { FC } from 'react'
import s from './IconBig.module.scss'

interface IIconBig {
    children?: any
    isActive?: boolean
    isPointer?: boolean
}

const IconBig: FC<IIconBig> = (props) => {
    return (
        <div
            className={`
            ${s.box} 
            ${props.isActive && s.active} 
            ${props.isPointer && s.pointer}`}>
            {props.children}
        </div>
    )
}

export default IconBig