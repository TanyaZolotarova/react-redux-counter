import {memo} from "react";

export const TitleTextComponent = memo(function TitleTextComponent({title, text, className}) {
    return (
        <>
            {title && <h1 className={className}>{title}</h1>}
            {text && <span className={className}>{text}</span>}
        </>
    )
})