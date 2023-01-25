import { FC } from 'react'
import s from './SimpleModal.module.scss'
import close from '../../../Static/close.svg'

interface ISimpleModal {
    children?: any
    className?: string
}

const SimpleModal: FC<ISimpleModal> = (props) => {
    return (
        <div className={s.modal}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <button className={s.close}>
                    <img src={close} alt='close' />
                </button>
                {props.children}
            </div>
        </div>
    )
}

export default SimpleModal