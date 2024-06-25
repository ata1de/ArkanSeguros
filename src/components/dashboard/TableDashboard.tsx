import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { cn } from '@/lib/utils'

const TableDashboard = () => {
  return (
    <Table className={cn('rounded-xl border border-gray-600 p-5 shadow')}>
        <TableHeader>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Serviço</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Segurado</TableHead>
            <TableHead>Demanda</TableHead>
        </TableHeader>
        <TableBody>
            {Array.from({length: 10}).map((_, index) => {
                return (
                    <TableRow key={index}>
                        <TableCell>Mateus</TableCell>
                        <TableCell>mateusataide5@gmail.com</TableCell>
                        <TableCell>Odontológico</TableCell>
                        <TableCell>(81) 99242-3427</TableCell>
                        <TableCell>Segurado</TableCell>
                        <TableCell>eu quero que adsfasd...</TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
            
    </Table>
  )
}

export default TableDashboard