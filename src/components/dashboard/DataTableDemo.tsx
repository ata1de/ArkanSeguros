"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, CalendarDays, ChevronDown, Divide, User2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ClientDataTableType, updateStatusUser } from "@/services/clients"
import Image from "next/image"
import { useQueryClient } from "@tanstack/react-query"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { Separator } from "../ui/separator"
import { FormattedDate } from "@/utils/FormattedDate"

interface DataTableDemoProps {
  data: ClientDataTableType[]
}

const statusOptions = ["Feito", "Cancelado", "Em progresso", "Neutro"]

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
const handleUpdateStatus = async (updatedClient: Partial<ClientDataTableType>, id: string) => {
  await updateStatusUser(updatedClient, id);
};

const StatusButton: React.FC<{ initialStatus: string; client: ClientDataTableType; onUpdateStatus: (client: Partial<ClientDataTableType>, id: string) => void }> = ({ initialStatus, client, onUpdateStatus }) => {
  const [status, setStatus] = React.useState(initialStatus);
  const queryClient = useQueryClient();

  
  const handleUpdateStatus = async (newStatus: string) => {
    setStatus(newStatus);

    const updatedClient = { ...client, stats: newStatus };
    try {
      
      onUpdateStatus(updatedClient, client.id);
      // atualizando o cache do queryClient para refletir localmente
      queryClient.setQueryData(["users"], (oldData: ClientDataTableType[] | undefined) => {
        if (!oldData) return [];
        return oldData.map((data) => {
          if (data.id === client.id) {
            return { ...data, stats: newStatus };
          }
          return data;
        })
      })
      
      await queryClient.refetchQueries({ queryKey: ['accurate'] });

    } catch (error) {
      console.log("Error updating status")
      throw new Error("Error updating status")
    }
};

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="bg-transparent border-none">
        <Button variant="outline" className="capitalize">
         <Image src={styledStats(status)} width={10} height={10} alt="" className="mr-2"/>  {status} <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-DarkBlue text-WhiteDefault border-2 border-WhiteDefault">
        {statusOptions.map((option) => (
          <DropdownMenuItem
            key={option}
            onClick={() => handleUpdateStatus(option)}
          >
            <Image src={styledStats(option)} width={10} height={10} alt="" className="mr-2"/> {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

interface DemandCardProps {
  client: ClientDataTableType

}

export const DemandCard = ({client}: DemandCardProps) => {
  return (
    <HoverCard>
    <HoverCardTrigger asChild className="cursor-pointer hover:underline">
      <p className="truncate max-w-[120px]">{client.demand}</p>
    </HoverCardTrigger>
    <HoverCardContent className="bg-DarkBlue border-2 max-h-[500px] max-w-[500px] border-WhiteDefault text-WhiteDefault">
        <div className="flex flex-col justify-center items-start">
          <div className="flex justify-center items-center">
            <User2 className="mr-2 h-4 w-4 opacity-70" />  
            <h4 className="text-sm font-semibold">{client.name}</h4>
          </div>
          <Separator className="my-3 bg-gray-400" />
          <p className="text-sm mb-3">
            {client.demand}
          </p>
          <div className="flex items-center pt-2">
            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">
              {FormattedDate(client.createdAt)}
            </span>
          </div>
        </div>
    </HoverCardContent>
  </HoverCard>
  )
}

export const columns: ColumnDef<ClientDataTableType>[] = [
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
    accessorKey: "peopleType",
    header: "Pessoa",
    cell: ({ row }) => <div>{row.getValue("peopleType")}</div>,
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
    accessorKey: "service",
    header: "Serviço",
    cell: ({ row }) => <div>{row.getValue("service")}</div>,
  },
  {
    accessorKey: "stats",
    header: "Status",
    cell: ({ row }) => (
      <StatusButton
        initialStatus={row.getValue("stats")}
        client={row.original}
        onUpdateStatus={handleUpdateStatus}
      />
    ),
  },
  {
    accessorKey: "isClient",
    header: "Status do cliente",
    cell: ({ row }) => <div>{row.getValue("isClient")}</div>,
  },
]

export function DataTableDemo({ data }: DataTableDemoProps) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [currentPage, setCurrentPage] = React.useState(0)


  const table = useReactTable<ClientDataTableType>({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 8,
      },
    },
  })

  return (
    <div className="w-full">
      <div className="flex justify-end gap-3 py-4">
        <Input
          placeholder="Filtrar pelo email.."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("email")?.setFilterValue(event.target.value)}
          className="max-w-sm bg-DarkBlue focus:ring-primary-500 focus:border-none text-WhiteDefault"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="bg-DarkBlue hover:bg-muted/10 hover:text-WhiteDefault">
            <Button variant="outline" className="ml-auto">
              Colunas <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-DarkBlue text-WhiteDefault ">
            {table.getAllColumns().filter((column) => column.getCanHide()).map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {currentPage + 1} of {table.getPageCount()} page(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-DarkBlue text-WhiteDefault hover:bg-muted/10 hover:text-WhiteDefault"
            onClick={() => {
              table.previousPage()
              setCurrentPage(table.getState().pagination.pageIndex - 1)
            }}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-DarkBlue text-WhiteDefault hover:bg-muted/10 hover:text-WhiteDefault"
            onClick={() => {
              table.nextPage()
              setCurrentPage(table.getState().pagination.pageIndex + 1)
            }}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>

  )
}
