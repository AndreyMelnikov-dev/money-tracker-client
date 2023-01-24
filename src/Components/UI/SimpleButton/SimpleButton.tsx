import { FC } from 'react'
import s from './SimpleButton.module.scss'

interface ISimpleButton {
    text?: string
    onClick?: () => void
    children?: string
    className?: string
}

const SimpleButton: FC<ISimpleButton> = (props) => {
    return (
        <button className={`${s.box} ${props.className}`}>{props.children}</button>
    )
}

export default SimpleButton