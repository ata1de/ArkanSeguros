'use client'

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DEFAULT_USERS_DATA, statusOptions } from '@/constants/table';
import { LeadType } from "@/types/leads";
import { TableType } from '@/types/table';
import { getStatusPlan, statusObj, styledStats } from '@/utils/table';
import { useQueryClient } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import Image from 'next/image';
import React, { useState } from "react";

const StatusButton: React.FC<{ initialStatus: string; client: LeadType; onUpdateStatus: (status: string, id: number) => Promise<void> }> = ({ initialStatus, client, onUpdateStatus }) => {
    const [status, setStatus] = useState(initialStatus);
    const queryClient = useQueryClient();

    const handleUpdateStatus = async (newStatus: keyof typeof statusObj) => {
      try {
        await onUpdateStatus(newStatus, client.id);

        setStatus(getStatusPlan(newStatus));
        queryClient.setQueryData(["users"], (oldData: TableType | undefined
        ) => {
          if (!oldData) return DEFAULT_USERS_DATA;

          const updatedLeads = oldData.leads.map((data) => {
            if (data.id === client.id) {
              return { ...data, status: newStatus };
            }

            return data;
          });

          return { ...oldData, leads: updatedLeads };
        });
        queryClient.refetchQueries({ queryKey: ['accurate', 'users', 'progress', 'peopleTypeManager'] });
      } catch (error) {
        throw new Error("Error updating status");
      }
    };

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="bg-transparent border-none">
          <Button variant="outline" className="capitalize">
            <Image src={styledStats(status)} width={10} height={10} alt="" className="mr-2"/> {status} <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-DarkBlue text-WhiteDefault border-2 border-WhiteDefault">
          {statusOptions.map(({ label, value}) => (
            <DropdownMenuItem
              key={label}
              onClick={() => handleUpdateStatus(value as keyof typeof statusObj)}
            >
              <Image src={styledStats(label)} width={10} height={10} alt="" className="mr-2"/> {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
};

export default StatusButton;