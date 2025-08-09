import { decodeEntity } from 'html-entities'
export default function EmojiButton({
    content,
    emoji,
    handleClick,
    selectedCardEntry,
    matchedCardEntry,
    index
}) {
    
    const btnContent = selectedCardEntry || matchedCardEntry ? decodeEntity(emoji.htmlCode[0]) : "?"
    const btnStyle =
        matchedCardEntry ? "btn--emoji__back--matched" :
        selectedCardEntry ? "btn--emoji__back--selected" :
        "btn--emoji__front"
    
        const btnAria =
        matchedCardEntry ? `${decodeEntity(emoji.name)}. Совпадение найдено.`:
         selectedCardEntry ? `${decodeEntity(emoji.name)}. Совпадение пока не найдено.` :
         "Карточка перевернута."

        return (
        <button
            className={`btn btn--emoji ${btnStyle}`}
            onClick={selectedCardEntry ? null : handleClick}
            disabled={matchedCardEntry}
            aria-label={`Позиция ${index +1}: ${btnAria}`}
            aria-live="polite"
        >
             {btnContent}
        </button>
    )
}