import { useRef, useEffect } from 'react'
import RegularButton from './RegularButton'
import Select from './Select'

export default function Form({ handleSubmit, handleChange, isFirstRender }) {
    
    const divRef = useRef(null)
    useEffect(() => {
         !isFirstRender && divRef.current.focus()
    }, [])

    return (
        <div className="form-container" ref={divRef} tabIndex={-1}>
             <p className="p--regular">
                Настройте игру, выбрав категорию эмодзи и количество карточек памяти.
            </p>
            <form className="wrapper">
                <Select handleChange={handleChange} />
               
            <RegularButton handleClick={handleSubmit}>
                Начать игру
            </RegularButton>
            </form>
        </div>
    )
}