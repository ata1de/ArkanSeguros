import { db } from "@/lib/firebase";
import { ClientType } from "@/types/clientType";
import { PeopleTypeFunction } from "@/utils/PeopleTypeFunction";
import { isClientFunction } from "@/utils/isClientFunction";
import { create } from "domain";
import { collection, query, getDocs, addDoc, Timestamp, where } from "firebase/firestore";

export interface ClientTypeFirebase extends ClientType {
    id: string;
}

export async function createClient(data: ClientType) {
    const clientRef = collection(db, "clients");

    try {
        await addDoc(clientRef, {
            ...data,
            createdAt: Timestamp.now()
        }); 
        return { status: 200 }
    } catch (error) {
        console.log("Error adding document: ", error);
        return { status: 400 }
    }
}

export async function getAllClients() {
    const clientRef = collection(db, "clients");
    const q = query(clientRef);

    try {
        const querySnapshot = await getDocs(q);
        const clients: ClientTypeFirebase[] = [];
        querySnapshot.forEach((doc) => {
            clients.push({ id: doc.id, ...doc.data() } as ClientTypeFirebase);
        });
        return clients;
    } catch (error) {
        console.log("Error getting documents: ", error);
        throw new Error("Failed to fetch clients");
    }
}

export async function peopleCounts() {
    const clientRef = collection(db, "clients");
    
    // dados de pessoa fisica
    const physicalQuery  = query(clientRef, where("peopleType", "==", "Pessoa Física"));
    const physicalSnapshot = await getDocs(physicalQuery);
    const physicalSnapshotSize = physicalSnapshot.size;

    // dados de pessoa juridica
    const legalQuery = query(clientRef, where("peopleType", "==", "Pessoa Jurídica"));
    const legalSnapshot = await getDocs(legalQuery);
    const legalSnapshotSize = legalSnapshot.size;


    // const peopleTypeManager = PeopleTypeFunction(physicalSnapshotSize, legalSnapshotSize);
    // return peopleTypeManager;

    return { physicalSnapshotSize, legalSnapshotSize };

}

export async function clientsTypeCount() {
    const clientRef = collection(db, 'clients')

    // dados para os novos clientes
    const newClientQuery = query(clientRef, where("isClient", "==", "Novo cliente"))
    const newClientSnapshot = await getDocs(newClientQuery)
    const newClientSnapshotSize = newClientSnapshot.size

    // dados para clientes antigos
    const oldClientQuery = query(clientRef, where("isClient", "==", "Cliente da casa"))
    const oldClientSnapshot = await getDocs(oldClientQuery)
    const oldClientSnapshotSize = oldClientSnapshot.size

    // const clientTypeManager = isClientFunction(newClientSnapshotSize, oldClientSnapshotSize)
    // return clientTypeManager

    return { newClientSnapshotSize, oldClientSnapshotSize}
}
