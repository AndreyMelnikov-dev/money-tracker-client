import { FC } from 'react'
import s from './SimpleTextarea.module.scss'

interface ISimpleTextarea {
    title?: string
    value?: string
    placeholder?: string
}

const SimpleTextarea: FC<ISimpleTextarea> = (props) => {
    return (
        <label className={s.box}>
            {props.title && <span className='f8'>{props.title}</span>}
            <textarea
                className={s.textarea}
                // value={props.value || ''}
                placeholder={props.placeholder || 'Write Here'}
            ></textarea>
        </label>
    )
}

export default SimpleTextarea