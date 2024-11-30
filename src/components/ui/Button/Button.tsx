import React from "react"
import "./Button.css"

interface ButtonProps {
    children: React.ReactNode
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick 
}) => {
    return ( 
        <button
            className="button"
            type="button"
            onClick = {onClick}
        >
            {children}
        </button>   
    )
}

export default Button