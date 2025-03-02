import { Loader2 } from "lucide-react";
import { accuracyStatusProps, ClientManagerProps, PeopleTypeProps, ProgressClientsProps, ServicesByUsersProps } from "./leads";

export const IconsSpinner = {
    spinner: Loader2,
};

interface CardsDashboardProps {
    clientManager: ClientManagerProps
    peopleTypeManager: PeopleTypeProps
    accuracyRate: accuracyStatusProps
    progressClients: ProgressClientsProps
    isLoadingProgressStatus: boolean
    isLoadingClientManager: boolean;
    isLoadingPeopleManager: boolean;
    isLoadingAccurate: boolean;
    isRefetchingAccurate: boolean;
    isRefetchingProgressStatus: boolean;
}

interface DataPoint {
    month: string;
    leads: number;
}

interface PieChartsProps {
    data: ServicesByUsersProps[];
    isLoading: boolean;
  }

interface TinyChartProps {
    data: DataPoint[];
    isLoading: boolean;
}

type SectionCardDashboardProps = CardsDashboardProps & {
    dataUserByMonth: DataPoint[]
    dataServices: ServicesByUsersProps[]
    isLoadingUserByMonth: boolean
    isLoadingServices: boolean
}

export type {
    CardsDashboardProps, PieChartsProps,
    SectionCardDashboardProps,
    TinyChartProps
};

