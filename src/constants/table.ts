const statusOptions = [
	{value: 'DONE', label: "Feito"},
	{value: 'CANCELLED', label: "Cancelado"},
	{value: 'IN_PROGRESS', label: "Em progresso"},
	{value: 'NOT_STARTED', label: "Neutro"}
]

const DEFAULT_USERS_DATA = {
	perPage: 15,
	page: 1,
	total: 0,
	leads: []
}

export { DEFAULT_USERS_DATA, statusOptions }

