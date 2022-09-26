import React from "react";

export const Button = ({text, btnClass}) => {
    return(
        <>
            <button className={btnClass}> {text}</button>
        </>
    )
}