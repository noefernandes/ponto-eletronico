import { useState } from "react";
import { getUserInfo, logout } from "../../services/auth-service"
import Button from "../ui/Button/Button"
import "./Header.css"
import { Modal } from "../modal/Modal";

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);

    const user = getUserInfo();
    return (
        <header className="header">
            <h1 id="site-title">Sistema de Ponto Eletrônico</h1>
            <nav className="header-nav">
                <Button onClick={() => setOpen(!open)} 
                        type="button" 
                        display={user && user.role === "ADMIN" ? "block" : "none"}>
                        Novo usuário
                </Button>
                <Button onClick={() =>  logout()} type="button">Sair</Button>
            </nav>
            <Modal isOpen={open} closeModal={() => setOpen(false)}/>
        </header>

    )
}

export default Header