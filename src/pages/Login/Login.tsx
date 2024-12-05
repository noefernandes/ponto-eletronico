import { FormEvent, useEffect, useState } from "react"
import Button from "../../components/ui/Button/Button"
import "./Login.css"
import { axiosInstance } from "../../services/connections/axios-connection"
import { UserCredentials } from "../../models/UserCredentials"
import { useNavigate } from 'react-router-dom';
import { getUserInfo, storeUserInfo } from "../../services/auth-service"

const Login = () => {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [errorMessage, setErrorMessage] = useState<string>("")

    const navigate = useNavigate();

    useEffect(() => {
        const user = getUserInfo();
        if (user) {
            navigate("/");
        }
    }, [])

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const values: UserCredentials = {
            username,
            password
        }
        
        axiosInstance.post("users/login", values).then((response) => {
            storeUserInfo(response.data);
            navigate("/"); 
        }).catch((error) => {
            setErrorMessage(error.response.data.message);
        })
    }

    return (
        <main className="container">
            <section className="login-card">
                <h1 id="login-title">Sistema de Ponto Eletrônico</h1>
                <form className="auth-form" onSubmit={onSubmit}>
                    <div className="subtitle">
                        <h2>Realize seu Login</h2>
                        <p className="error-message">{errorMessage}</p>
                    </div>
                    <div className="input-group">
                        <input className="input-field"
                               type="text" 
                               name="username" 
                               id="username" 
                               placeholder="Nome de Usuário" 
                               onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <input className="input-field"
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Senha" 
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <Button
                        backgroundColor="#0DBC50"
                        margin="20px 0 0 0"
                        type="submit"
                    >Entrar</Button>
                </form>
            </section>
        </main>
    )
}

export default Login