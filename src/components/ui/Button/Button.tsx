import React from "react"
import "./Button.css"

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    backgroundColor?: string
    type: 'button' | 'submit' | 'reset'
    margin?: string,
    display?: string
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    backgroundColor,
    type,
    margin,
    display
}) => {
    return ( 
        <button
            className="button"
            onClick={onClick}
            type={ type }
            style={{ backgroundColor, margin, display }}
        >
            {children}
        </button>   
    )
}

export default Button