import Card from "../../components/Card/Card"
import BigButton from "../../components/ui/BigButton/BigButton"
import "./Home.css"
import { TimeRecordResponse } from "../../models/TimeRecordResponse"
import { useEffect, useState } from "react"
import { convertSecondsToTime, convertTimeToString, getFormattedCurrentTime } from "../../utils/helpers"
import { TimeRecordType } from "../../constants/TimeRecordType"
import { useTime } from "../../hooks/useTime"
import { getWorkDayFromUser, postTimeRecord } from "../../services/user-service"
import { TimeRecordRequest } from "../../models/TimeRecordRequest"

const Home: React.FC = () => {

    const [timeRecords, setTimeRecords] = useState<TimeRecordResponse[]>([]);
    const { currentTime, workedTime, remainingTime } = useTime(1000, 3);
    const [workDayId, setWorkDayId] = useState<number | null>(0);

    useEffect(() => {
        const fetchReport = async () => {
            const report = await getWorkDayFromUser();
            setWorkDayId(report.id);
            setTimeRecords(report.timeRecords);
        }
        
        fetchReport();
    }, [])

    const addCard = (type: string) => {
        const timestamp = getFormattedCurrentTime();
        if(workDayId === null) return;
        let newTimeRecord: TimeRecordRequest = { workDayId, type, timestamp };
        postTimeRecord(newTimeRecord);

        setTimeRecords([...timeRecords, newTimeRecord]);
    }

    const addCheckInCard = () => {
        addCard(TimeRecordType.CheckIn);
    }

    const addBreakCard = () => {
        addCard(TimeRecordType.Break);
    }

    const addResumeCard = () => {
        addCard(TimeRecordType.Resume);
    }

    const addCheckOutCard = () => {
        addCard(TimeRecordType.CheckOut);
    }

    const canAddEnterRecord = () => {
        return !timeRecords.some((timeRecord) => timeRecord.type === TimeRecordType.CheckIn);
    }

    const canAddPauseRecord = () => {
        if(timeRecords.length === 0) {
            return false;
        }

        const lastTimeRecord = timeRecords[timeRecords.length - 1];
        return lastTimeRecord.type !== TimeRecordType.Break && lastTimeRecord.type !== TimeRecordType.CheckOut;
    }

    const canAddReturnRecord = () => {
        if(timeRecords.length === 0) {
            return false;
        }

        const lastTimeRecord = timeRecords[timeRecords.length - 1];
        return lastTimeRecord.type === TimeRecordType.Break;
    }

    const canAddExitRecord = () => {
        return timeRecords.some((timeRecord) => timeRecord.type === TimeRecordType.CheckIn) &&
            !timeRecords.some((timeRecord) => timeRecord.type === TimeRecordType.CheckOut);
    }

    const showTimeRecords = () => {
        return timeRecords.map((timeRecord, index) => {
            let color = null;
            let name = null;
            switch (timeRecord.type) {
                case TimeRecordType.CheckIn:
                    name = 'Entrada';
                    color = '#0DBC50';
                    break;
                case TimeRecordType.Break:
                    name = 'Pausa';
                    color = '#F48037';
                    break;
                case TimeRecordType.Resume:
                    name = 'Retorno';
                    color = '#4842F3';
                    break;
                case TimeRecordType.CheckOut:
                    name = 'Saída';
                    color = '#FF0000';
                    break;
                default:
                    return;
            }

            return (
                <Card key={index} name={name} content={timeRecord.timestamp} 
                      backgroundColor={color} border="1px solid #262626"/>
            )
        }
    )}


    return (    
        <main id="main">
            <section className="group-panel">
                <p className="current-time-panel">{ convertTimeToString(currentTime) }</p>
                <div className="info-panel">
                    <Card name="Tempo trabalhado" content={ convertSecondsToTime(workedTime) }/>
                    <Card name="Tempo restante" content={ convertSecondsToTime(remainingTime) }/>
                    <Card name="Tempo excedido" content="00:00"/>
                </div>
                <div className="button-panel">
                    <BigButton backgroundColor="#0DBC50" disabled={!canAddEnterRecord()} 
                        onClick={() => addCheckInCard()}>Entrada</BigButton>
                    <BigButton backgroundColor="#F48037" disabled={!canAddPauseRecord()}
                        onClick={() => addBreakCard()}>Pausa</BigButton>
                    <BigButton backgroundColor="#4842F3" disabled={!canAddReturnRecord()}
                        onClick={() => addResumeCard()}>Retorno</BigButton>
                    <BigButton backgroundColor="#FF0000" disabled={!canAddExitRecord()}
                        onClick={() => addCheckOutCard()}>Saída</BigButton>
                </div>
            </section>
            <section className="log-panel">
                { showTimeRecords() }
            </section>
        </main>
    )
}

export default Home
