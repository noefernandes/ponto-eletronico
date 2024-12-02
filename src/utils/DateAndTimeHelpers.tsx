export function getFormattedCurrentTime(){
    return new Date().toLocaleTimeString('pt-BR', {timeZone: 'America/Sao_Paulo'});
}

export function convertTimeToString(date: Date) {
    return date.toLocaleTimeString('pt-BR', {timeZone: 'America/Sao_Paulo'});
}

export function convertSecondsToTime(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
}