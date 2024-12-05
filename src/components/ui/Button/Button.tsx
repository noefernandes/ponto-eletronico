import React from "react"
import "./Button.css"

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    backgroundColor?: string
    type: 'button' | 'submit' | 'reset'
    margin?: string
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    backgroundColor,
    type,
    margin
}) => {
    return ( 
        <button
            className="button"
            onClick={onClick}
            type={ type }
            style={{ backgroundColor, margin }}
        >
            {children}
        </button>   
    )
}

export default Button