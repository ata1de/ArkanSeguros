import { db } from "@/lib/firebase";
import { ClientType } from "@/types/clientType";
import { addDoc, collection, query } from "firebase/firestore";

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