import { useRef, useEffect } from 'react'
import RegularButton from './RegularButton'

export default function ErrorCard({ handleClick }) {
    const divRef = useRef(null)
    useEffect(() => {
         divRef.current.focus()
    }, [])

    return (
        <div className="wrapper wrapper--accent" ref={divRef} tabIndex={-1}>
            <p className="p--large">Извините, произошла ошибка.</p>
            <p className="p--regular">Пожалуйста, вернитесь позже или нажмите кнопку ниже, чтобы попробовать перезапустить игру.</p>
            <RegularButton handleClick={handleClick}>
                Перезапустить игру
            </RegularButton>
        </div>
    )
}