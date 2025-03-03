import { Button } from "@/components/ui/button"
import { LeadType } from "@/types/leads"
import { getPersonType, getStatusPlan, handleUpdateStatus } from "@/utils/table"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { DemandCard } from "./DemandCard"
import { StatusButton } from "./StatusButton"

const columns: ColumnDef<LeadType>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-muted/10 hover:text-WhiteDefault"
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-muted/10 hover:text-WhiteDefault"
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
      accessorKey: "phone",
      header: "Telefone",
      cell: ({ row }) => <div>{row.getValue("phone")}</div>,
    },
    {
      accessorKey: "is_pf",
      header: "Pessoa",
      cell: ({ row }) => <div>{getPersonType(row.getValue("is_pf"))}</div>,
    },
    {
      accessorKey: "demand",
      header: "Demanda",
      cell: ({ row }) => (
        <DemandCard
          client={row.original}
        />
      ),
    },
    {
      accessorKey: "interest_plan",
      header: "Serviço",
      cell: ({ row }) => <div>{row.getValue("interest_plan")}</div>,
    },
    {
      accessorKey: "status",
      header: "Status do cliente",
      cell: ({ row }) => (
        <StatusButton
          initialStatus={getStatusPlan(row.getValue("status"))}
          client={row.original}
          onUpdateStatus={handleUpdateStatus}
        />
      ),
    },
  ]

export { columns }
