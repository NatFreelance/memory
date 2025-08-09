export default function AssistiveTechInfo({ emojisData, matchedCards }) {
    return (
        <section className="sr-only"  aria-live="polite" aria-atomic="true">
            <h2>Статус игры</h2>
            <p>Количество совпавших пар: {matchedCards.length / 2}</p>
            <p>Количество карточек для сопоставления: {emojisData.length - matchedCards.length}</p>
        </section>
    )
}