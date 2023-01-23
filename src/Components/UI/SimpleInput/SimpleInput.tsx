import { FC } from 'react'
import s from './SimpleInput.module.scss'

interface ISimpleInput {
    type?: string
    title?: string
    value?: string
    placeholder?: string
}

const SimpleInput: FC<ISimpleInput> = (props) => {
    return (
        <label className={s.box}>
            {props.title && <span className={s.title}>{props.title}</span>}
            <input
                className={s.input}
                type={props.type || 'text'}
                value={props.value || ''}
                placeholder={props.placeholder || 'Write Here'}
            />
        </label>
    )
}

export default SimpleInput