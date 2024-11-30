import React from "react"
import "./BigButton.css"

interface BigButtonProps {
    children: React.ReactNode
    backgroundColor: string
    onClick: () => void
}

const BigButton: React.FC<BigButtonProps> = ({
    children,
    backgroundColor,
    onClick 
}) => {
    return ( 
        <button
            className="big-button"
            type="button"
            onClick = {onClick}
            style={{ backgroundColor }}
        >
            {children}
        </button>   
    )
}

export default BigButton