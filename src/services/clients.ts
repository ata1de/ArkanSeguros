import { db } from "@/lib/firebase";
import { ClientType } from "@/types/clientType";
import { addDoc, collection, query, getDoc, getDocs } from "firebase/firestore";

export async function createClient(data: ClientType) {
    const clientRef = collection(db, "clients");

    const q = query(clientRef);
    try {
        await addDoc(clientRef, data);
        return { status: 200 }
    } catch (error) {
        console.log("Error adding document: ", error)
        return { status: 400 }
    }
}

export async function getAllClients() {
    const clientRef = collection(db, "clients");

    const q = query(clientRef);
    try {
        const clients = await getDocs(clientRef);

        return { status: 200, data: clients }
    } catch (error) {
        console.log("Error adding document: ", error)
        return { status: 400 }
    }
}