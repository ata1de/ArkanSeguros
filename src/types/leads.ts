export interface ClientManagerProps {
    newClientsCount: number;
    difference: number;
    oldClientsCount: number;
    isNewClientPrevalence: boolean;
}

export interface PeopleTypeProps {
    pfCount: number;
    pjCount: number;
    difference: number;
    isPfPrevalence: boolean;
}

export interface accuracyStatusProps {
    doneAccuracyRate: number;
    isPositiveVariation: boolean;
    variationRate: number;
}

export interface ProgressClientsProps {
    inProgressCountLeads: number
    percentage: number
}

export interface UserCountByMonthProps {
    month: string;
    leads: number;
}

export interface ServicesByUsersProps {
    name: string;
    value: number;
}

export interface LeadType {
    name: string;
    email: string;
    phone: string;
    is_new_lead: boolean;
    status: string;
    demand: string;
    interest_plan: string;
    is_pf: string;
    creator_id: number | null;
}