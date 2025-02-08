import api from "./api";

export const getClientManager = async () => {
    const { data } = await api.get('/leads/people-type')

    console.log(data)

    return data
}