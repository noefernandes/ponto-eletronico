import Button from "../ui/Button/Button"
import "./Header.css"

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 id="title">Sistema de Ponto Eletrônico</h1>
            <nav>
                <Button onClick={() => {}}>Sair</Button>
            </nav>
        </header>
    )
}

export default Header