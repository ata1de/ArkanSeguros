'use client'

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { statusOptions } from '@/constants/table';
import { LeadType } from "@/types/leads";
import { styledStats } from '@/utils/table';
import { useQueryClient } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import Image from 'next/image';
import React from "react";

const StatusButton: React.FC<{ initialStatus: string; client: LeadType; onUpdateStatus: (client: Partial<LeadType>, id: number) => void }> = ({ initialStatus, client, onUpdateStatus }) => {
    const [status, setStatus] = React.useState(initialStatus);
    const queryClient = useQueryClient();
  
  
    const handleUpdateStatus = async (newStatus: string) => {
      setStatus(newStatus);
  
      const updatedClient = { ...client, stats: newStatus };
      try {
  
        onUpdateStatus(updatedClient, client.id);
        // atualizando o cache do queryClient para refletir localmente
        queryClient.setQueryData(["users"], (oldData: LeadType[] | undefined) => {
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

export default StatusButton;