import { ClientType } from "@/types/clientType";

export interface isClientType {
    newClient: boolean;
    diff: number;
}

export function isClientFunction(clients: ClientType[]) {
    const clientManager = {newClient: 0, oldClient: 0};

    clients.forEach((client) => {
        if (client.isClient === 'Cliente da casa') {
            clientManager.oldClient += 1;
        } else {
            clientManager.newClient += 1;
        }
    })

    
    if (clientManager.newClient > clientManager.oldClient) {
        const diff = clientManager.newClient - clientManager.oldClient;
        return {newClient: true, diff} 
    } else {
        const diff = clientManager.oldClient - clientManager.newClient;
        return {newClient: false, diff}
    }
}