import { TimeRecordRequest } from "../models/TimeRecordRequest";
import { getFormattedCurrentTime } from "../utils/helpers";
import { axiosInstance } from "./connections/axios-connection";

export const getWorkDayFromUser = async () => {
    const user = localStorage.getItem('user');
    if (!user) {
        return;
    }

    const userData = JSON.parse(user);

    try {
        const response = await axiosInstance.get(`workday/${userData.id}/report`);
        const report = response.data;
        console.log("entra1");
        return report;
    } catch (error) {
        const response = await axiosInstance.post('workday', {
            userProfileId: userData.id,
            timestamp: getFormattedCurrentTime()
        });
        const report = response.data;
        console.log("entra2");
        return report;
    }
}

export const postTimeRecord = async (timeRecord: TimeRecordRequest) => {
    try {
        const response = await axiosInstance.post('time-record', timeRecord);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter o relatório:', error);
        return null;
    }
}