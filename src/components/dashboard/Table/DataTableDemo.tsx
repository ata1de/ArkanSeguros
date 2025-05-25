"use client";

import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, PlusIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllLeads } from "@/process/leads";
import { ClientDataTableType } from "@/services/clients";
import { IconsSpinner } from "@/types/dashboard";
import { useQuery } from "@tanstack/react-query";
import { AddClientModal } from "./AddClientModal";
import { columns } from "./columns";

export function DataTableDemo() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);

  const { data: dataUsers, isLoading } = useQuery<ClientDataTableType>({
    queryKey: ["users", currentPage],
    queryFn: async () => {
      const data = await getAllLeads(currentPage + 1, 10);
      return data;
    },
  });

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: dataUsers?.leads ? dataUsers?.leads : [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
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
    manualPagination: true,
    pageCount: dataUsers ? Math.ceil(dataUsers.total / dataUsers.perPage) : 0,
  });

  return isLoading ? (
    <div className="w-full h-full m-auto flex items-center justify-center">
      <IconsSpinner.spinner className="w-14 h-14 animate-spin" />
    </div>
  ) : (
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
          <DropdownMenuTrigger
            asChild
            className="bg-DarkBlue hover:bg-muted/10 hover:text-WhiteDefault"
          >
            <Button variant="outline" className="ml-auto">
              Colunas <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-DarkBlue text-WhiteDefault "
          >
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
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="outline"
          onClick={() => setModalOpen(true)}
          className="bg-DarkBlue text-WhiteDefault hover:bg-muted/10 hover:text-WhiteDefault"
        >
          <PlusIcon className="w-4 h-4" />
          Adicionar cliente
        </Button>
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
                  );
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
                  className="hover:bg-gray-900/50 transition px-4"
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
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Página {currentPage + 1} de{" "}
          {dataUsers ? Math.ceil(dataUsers.total / dataUsers.perPage) : 0}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-DarkBlue text-WhiteDefault hover:bg-muted/10 hover:text-WhiteDefault"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 0}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-DarkBlue text-WhiteDefault hover:bg-muted/10 hover:text-WhiteDefault"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={
              !dataUsers?.leads || dataUsers.leads.length < dataUsers.perPage
            }
          >
            Próxima
          </Button>
        </div>
      </div>
      <AddClientModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={() => {}}
      />
    </div>
  );
}
