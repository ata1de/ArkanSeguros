export interface ProgressClientsProps {
    percentProgress: number
    amountProgress: number
}


export function progressClients(progressClientsCount: number, allClientsCount: number) {
    const percentProgress = (progressClientsCount/allClientsCount) * 100 

    return {
        percentProgress,
        amountProgress: progressClientsCount
    
    }
}