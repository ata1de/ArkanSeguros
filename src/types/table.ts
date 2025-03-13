import { LeadType } from "./leads";

export interface TableType {
    page: number,
    perPage: number,
    total: number,
    leads: LeadType[]
}