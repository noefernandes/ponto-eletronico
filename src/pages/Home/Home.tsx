import Card from "../../components/Card/Card"
import BigButton from "../../components/ui/BigButton/BigButton"
import "./Home.css"
import { TimeRecord } from "../../models/TimeRecord"
import { useState } from "react"
import { getFormattedCurrentTime } from "../../utils/Helpers"
import { RecordType } from "../../constants/RecordType"

const Home: React.FC = () => {

    const [timeRecords, setTimeRecords] = useState<TimeRecord[]>([]);

    const addCard = (type: string) => {
        const date = getFormattedCurrentTime();
        const newTimeRecord: TimeRecord = { type: type, date: date };

        setTimeRecords([...timeRecords, newTimeRecord]);
    }

    const addEnterCard = () => {
        addCard(RecordType.Entrada);
    }

    const addPauseCard = () => {
        addCard(RecordType.Pausa);
    }

    const addReturnCard = () => {
        addCard(RecordType.Retorno);
    }

    const addExitCard = () => {
        addCard(RecordType.Saida);
    }

    const hasEnterRecord = () => {
        return timeRecords.some((timeRecord) => timeRecord.type === RecordType.Entrada);
    }

    const showTimeRecords = () => {
        return timeRecords.map((timeRecord, index) => {
            let color = null;
            switch (timeRecord.type) {
                case 'entrada':
                    color = '#0DBC50';
                    break;
                case 'pausa':
                    color = '#F48037';
                    break;
                case 'retorno':
                    color = '#4842F3';
                    break;
                case 'saida':
                    color = '#FF0000';
                    break;
                default:
                    return;
            }

            return (
                <Card key={index} name={timeRecord.type} content={timeRecord.date} 
                      backgroundColor={color} border="1px solid #262626"/>
            )
        }
    )}


    return (    
        <main id="main">
            <section className="group-panel">
                <div className="info-panel">
                    <Card name="Tempo trabalhado" content="00:00"/>
                    <Card name="Tempo restante" content="00:00"/>
                    <Card name="Tempo excedido" content="00:00"/>
                </div>
                <div className="button-panel">
                    <BigButton backgroundColor="#0DBC50" disabled={hasEnterRecord()} 
                        onClick={() => addEnterCard()}>Entrada</BigButton>
                    <BigButton backgroundColor="#F48037"
                        onClick={() => addPauseCard()}>Pausa</BigButton>
                    <BigButton backgroundColor="#4842F3" 
                        onClick={() => addReturnCard()}>Retorno</BigButton>
                    <BigButton backgroundColor="#FF0000" 
                        onClick={() => addExitCard()}>Saída</BigButton>
                </div>
            </section>
            <section className="log-panel">
                { showTimeRecords() }
            </section>
        </main>
    )
}

export default Home