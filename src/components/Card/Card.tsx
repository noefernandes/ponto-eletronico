import "./Card.css"

interface CardProps {
    description: string
    time: string
}

const Card: React.FC<CardProps> = ({ description, time }) => {
    return (
        <div className="card">
            <strong>{ description }</strong>
            <p>{ time }</p>
        </div>
    )
}

export default Card