import { logout } from "../../services/auth-service"
import Button from "../ui/Button/Button"
import "./Header.css"

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 id="site-title">Sistema de Ponto Eletrônico</h1>
            <nav>
                <Button onClick={() =>  logout()} type={"submit"}>Sair</Button>
            </nav>
        </header>
    )
}

export default Header