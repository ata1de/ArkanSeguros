import { LeadTypeForm } from "@/types/leads";
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

export const getAllLeads = async (page: number, perPage: number) => {
    const { data } = await api.get(`/leads?page=${page}&perPage=${perPage}`)

    return data
}

export const updateLeadStatus = async (status: string, id: number) => {
    await api.patch(`/leads/status/${id}`, {
        status
    })
}

export const updateLead = async (body: LeadTypeForm, id: number) => {
    const { data, status } = await api.put(`/leads/${id}`, body)

    return {
        ...data,
        status
    }
}

export const deleteLead = async (id: number) => {
    const { data, status } = await api.delete(`/leads/${id}`)

    return {
        ...data,
        status
    }
}

export const createLead = async (body: LeadTypeForm): Promise<LeadTypeForm & {
    status: number
}> => {
    const { data, status } = await api.post('/leads', body)

    return {
        ...data,
        status
    }
}

export const addFormLead = async (body: LeadTypeForm): Promise<LeadTypeForm & {
    status: number
}> => {
    const { data, status } = await api.post('/leads/form', body)

    return {
        ...data,
        status
    }
}