import { ClientType } from "@/types/clientType";

export interface PeopleTypeProps {
    pf: boolean;
    diff: number;
    clientCount: number;
}

export function PeopleTypeFunction(clients: ClientType[]) {
    const peopleTypeManager = {pf: 0, pj: 0};

    clients.forEach((client) => {
        if (client.peopleType === 'Pessoa Juridica') {
            peopleTypeManager.pj += 1;
        } else {
            peopleTypeManager.pf += 1;
        }
    })

    
    if (peopleTypeManager.pf > peopleTypeManager.pj) {
        const diff = peopleTypeManager.pf - peopleTypeManager.pj;
        return {pf: true, diff, clientCount: peopleTypeManager.pf} 
    } else {
        const diff = peopleTypeManager.pj - peopleTypeManager.pf;
        return {pf: false, diff, clientCount: peopleTypeManager.pf}
    }
}