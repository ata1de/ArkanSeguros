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
import { ArrowUpDown, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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

const data: Person[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    peopleType: "Juridica",
    demand: "High",
    service: "Odonto",
    isClient: "New"
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "098-765-4321",
    peopleType: "Fisica",
    demand: "Medium",
    service: "Maquinas",
    isClient: "Existing"
  },
  {
    id: "3",
    name: "Robert Brown",
    email: "robert.brown@example.com",
    phone: "567-890-1234",
    peopleType: "Fisica",
    demand: "Low",
    service: "Certificado",
    isClient: "New"
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "432-109-8765",
    peopleType: "Client",
    demand: "High",
    service: "Insurance",
    isClient: "Existing"
  },
  {
    id: "5",
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    phone: "678-345-0123",
    peopleType: "Fisica",
    demand: "Medium",
    service: "Consulting",
    isClient: "New"
  },
  {
    id: "6",
    name: "Mateus Ataide",
    email: "mateus@example.com",
    phone: "678-345-0123",
    peopleType: "Juridica",
    demand: "Medium",
    service: "Consulting",
    isClient: "New"
  },
]

export type Person = {
  id: string
  name: string
  email: string
  phone: string
  peopleType: string
  demand: string
  service: string
  isClient: string
}

export const columns: ColumnDef<Person>[] = [
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
    cell: ({ row }) => <div>{row.getValue("demand")}</div>,
  },
  {
    accessorKey: "service",
    header: "Serviço",
    cell: ({ row }) => <div>{row.getValue("service")}</div>,
  },
  {
    accessorKey: "isClient",
    header: "Status do cliente",
    cell: ({ row }) => <div>{row.getValue("isClient")}</div>,
  },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [currentPage, setCurrentPage] = React.useState(0)

  const table = useReactTable({
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
        pageSize: 5,
      },
    },
  })

  return (
    <div className="w-full">
      <div className="flex justify-end gap-3 py-4">
        <Input
          placeholder="Filtrar pelo email.."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm bg-DarkBlue focus:ring-primary-500 focus:border-none text-WhiteDefault"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="bg-DarkBlue hover:bg-muted/10 hover:text-WhiteDefault">
            <Button variant="outline" className="ml-auto">
              Colunas <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-DarkBlue text-WhiteDefault ">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
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
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Sem resultados.
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
