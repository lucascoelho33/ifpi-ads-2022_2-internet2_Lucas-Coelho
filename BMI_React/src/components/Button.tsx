import React from "react";

interface buttonProps {
    text: string,
    callBack: Function 
}

const Button = ({text, callBack}: buttonProps) => {
    return(<button type="button" onClick={() => callBack()}>{text}</button>)
}

export default Button