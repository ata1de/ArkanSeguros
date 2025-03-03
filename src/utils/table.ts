import { updateStatusUser } from "@/services/clients";
import { LeadType } from "@/types/leads";

const getPersonType = (isPf: boolean) => {
    return isPf ? "Física" : "Jurídica";
}

const getStatusPlan = (status: keyof typeof statusObj) => {
    const statusObj = {
      "DONE": "Feito",
      "CANCELLED": "Cancelado",
      "IN_PROGRESS": "Em progresso",
      "NOT_STARTED": "Neutro",
    }

    return statusObj[status];
}

const handleUpdateStatus = async (updatedClient: Partial<LeadType>, id: number) => {
    await updateStatusUser(updatedClient, id);
};

const styledStats = (status: string) => {
  switch (status) {
    case "Feito":
      return "/statsTable/sucessStats.svg"
    case "Cancelado":
      return "/statsTable/failedStats.svg"
    case "Em progresso":
      return "/statsTable/progressStats.svg"
    default:
      return "/statsTable/nullStats.svg"
  }
}

export { getPersonType, getStatusPlan, handleUpdateStatus, styledStats };
