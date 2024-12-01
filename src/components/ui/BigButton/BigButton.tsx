import React from "react"
import "./BigButton.css"

interface BigButtonProps {
    children: React.ReactNode
    backgroundColor: string
    disabled?: boolean
    onClick: () => void
}

const BigButton: React.FC<BigButtonProps> = ({
    children,
    backgroundColor,
    disabled,
    onClick 
}) => {
    return ( 
        <button
            className="big-button"
            type="button"
            onClick={onClick}
            disabled={disabled} 
            style={{ backgroundColor }}
        >
            {children}
        </button>   
    )
}

export default BigButton