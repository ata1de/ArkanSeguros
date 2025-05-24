import { ClientSchema } from "@/components/form";
import { Lead } from "@/types/clientType";
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

export const getUserCountByMonth = async () => {
    const { data } = await api.get('/leads/monthly')

    return data
}

export const getServicesByUsers = async () => {
    const { data } = await api.get('/leads/services')

    return data
}

export const getAllLeads = async () => {
    const { data } = await api.get('/leads')

    return data
}

export const updateLeadStatus = async (status: string, id: number) => {
    await api.patch(`/leads/status/${id}`, {
        status
    })
}

export const createLead = async (body: ClientSchema): Promise<ClientSchema & {
    status: number
}> => {
    const { data, status } = await api.post('/leads', body)

    return {
        ...data,
        status
    }
}

export const addFormLead = async (body: Lead): Promise<Lead & {
    status: number
}> => {
    const { data, status } = await api.post('/leads/form', body)

    return {
        ...data,
        status
    }
}