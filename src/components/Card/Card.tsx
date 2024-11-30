import "./Card.css"

interface CardProps {
    name: string
    content?: string
    backgroundColor?: string
    height?: string
    width?: string
    border?: string
}

const Card: React.FC<CardProps> = ({ 
    name, 
    content, 
    backgroundColor, 
    height, 
    width,
    border
}) => {
    return (
        <div 
            className="card"
            style={{ backgroundColor: backgroundColor, height, width, border }}
        >
            <strong>{ name }</strong>
            <p>{ content }</p>
        </div>
    )
}

export default Card