import { FC } from 'react'
import s from './SimpleButton.module.scss'

interface ISimpleButton {
    text?: string
    onClick?: () => void
    children?: string
}

const SimpleButton: FC<ISimpleButton> = (props) => {
    return (
        <button className={s.box}>{props.children}</button>
    )
}

export default SimpleButton