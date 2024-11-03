export function BtnComponent({text, onClick, className}) {
    return (
        <button onClick={onClick}
                className={className}>
            {text}
        </button>
    )
}