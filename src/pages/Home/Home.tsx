import Card from "../../components/Card/Card"
import BigButton from "../../components/ui/BigButton/BigButton"
import "./Home.css"

const Home: React.FC = () => {

    return (    
        <main id="main">
            <section className="group-panel">
                <div className="info-panel">
                    <Card description="Tempo trabalhado" time="00:00"/>
                    <Card description="Tempo restante" time="00:00"/>
                    <Card description="Tempo excedido" time="00:00"/>
                </div>
                <div className="button-panel">
                    <BigButton backgroundColor="#0DBC50" onClick={() => {}}>Entrada</BigButton>
                    <BigButton backgroundColor="#F48037" onClick={() => {}}>Pausa</BigButton>
                    <BigButton backgroundColor="#4842F3" onClick={() => {}}>Retorno</BigButton>
                    <BigButton backgroundColor="#FF0000" onClick={() => {}}>Saída</BigButton>
                </div>
            </section>
        </main>
    )
}

export default Home