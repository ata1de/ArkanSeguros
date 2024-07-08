export interface accuracyStatusProps {
    accuracyRate: number
    variation: number
    resultVariation: boolean
}


export function accuracyStatus(confirmedQuery: number, canceledQuery: number, allClients: number) {
    const accuracy = (confirmedQuery / allClients) * 100

    
    if (confirmedQuery > canceledQuery) {
        return {
            accuracyRate: accuracy,
            variation: (confirmedQuery/canceledQuery) - 1,
            resultVariation: true
        }
    } else {
        return {
            accuracyRate: accuracy,
            variation: (canceledQuery/confirmedQuery) - 1,
            resultVariation: false
        }
    }

}   