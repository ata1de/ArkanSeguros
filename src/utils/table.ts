
const getPersonType = (isPf: boolean) => {
    return isPf ? "Física" : "Jurídica";
}

export enum statusObj {
  DONE = "Feito",
  CANCELLED = "Cancelado",
  IN_PROGRESS = "Em progresso",
  NOT_STARTED = "Neutro",
}

const getStatusPlan = (status: keyof typeof statusObj) => {
    return statusObj[status];
}

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

export { getPersonType, getStatusPlan, styledStats };
