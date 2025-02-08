import api from "./api";

export const getPeopleType = async () => {
    const { data } = await api.get('/leads/people-type')

    return data
}

export const getClientType = async () => {
    const { data } = await api.get('/leads/client-types')

    return data
}

export const getAccurateDoneLeads = async () => {
    const { data } = await api.get('/leads/accuracy')

    return data
}

export const getProgressClient = async () => {
    const { data } = await api.get('/leads/progress')

    return data
}