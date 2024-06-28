import { db } from "@/lib/firebase";
import { ClientType } from "@/types/clientType";
import { create } from "domain";
import { collection, query, getDocs, addDoc, Timestamp } from "firebase/firestore";

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
