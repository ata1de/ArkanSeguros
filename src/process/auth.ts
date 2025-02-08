import { LoginResponseType, LoginSchemaType } from "@/types/auth";
import api from "./api";

export const login = async (body: LoginSchemaType): Promise<LoginResponseType> => {
    const { data } = await api.post("/auth", body);

    return data;
}