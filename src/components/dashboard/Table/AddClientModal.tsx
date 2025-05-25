import { MaskedInput } from "@/components/InputMask";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { services } from "@/data/services";
import { createLead } from "@/process/leads";
import { Lead } from "@/types/clientType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import React, { useCallback, useState } from "react";
import { toast } from "sonner";

interface AddClientModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
}

const initialForm = {
  name: "",
  email: "",
  phone: "",
  is_pf: false,
  demand: "",
  interest_plan: services[0].title,
  status: "NOT_STARTED",
  is_new_lead: false,
};

export const AddClientModal: React.FC<AddClientModalProps> = ({
  open,
  onClose,
  onSave,
}) => {
  const queryClient = useQueryClient();
  const [form, setForm] = useState(initialForm);

  const { mutateAsync: createLeadMutation, isPending } = useMutation<
    Lead & { status: number },
    Error,
    Lead
  >({
    mutationKey: ["users", "createLead"],
    mutationFn: async (data: Lead) => {
      const response = await createLead(data);
      return response;
    },
    onSuccess: async () => {
      toast.success("Cliente adicionado com sucesso", {
        style: { backgroundColor: "#008000", color: "white" },
        position: "bottom-left",
        duration: 2500,
      });

      queryClient.refetchQueries({
        queryKey: ["accurate", "users", "progress", "peopleTypeManager"],
      });
    },
    onError: () => {
      toast.error("Erro na transferência de dados", {
        style: { backgroundColor: "#EE1B22", color: "white" },
        position: "bottom-left",
        duration: 2500,
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = useCallback(async () => {
    await createLeadMutation(form);
    onClose();
    // setForm(initialForm);
  }, [form, onSave, onClose]);

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="max-w-md w-full bg-DarkBlue text-WhiteDefault transition-all duration-300 animate-fade-in"
      >
        <SheetHeader>
          <SheetTitle className="text-WhiteDefault text-2xl">
            Adicionar Cliente
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-3 mt-6">
          <Input
            name="name"
            placeholder="Nome"
            value={form.name}
            onChange={handleChange}
            className="bg-[#1a2236] text-WhiteDefault border-none focus:ring-primary-500"
          />
          <Input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="bg-[#1a2236] text-WhiteDefault border-none focus:ring-primary-500"
          />
          <MaskedInput
            mask="(99) 99999-9999"
            className={`w-full p-2 rounded bg-[#1a2236] text-WhiteDefault border-none`}
            placeholder="(00) 00000-0000"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
          <select
            name="is_pf"
            value={form.is_pf ? "pf" : "pj"}
            onChange={(e) =>
              setForm({ ...form, is_pf: e.target.value === "pf" })
            }
            className="w-full p-2 rounded bg-[#1a2236] text-WhiteDefault border-none"
          >
            <option value="pf">Pessoa Física</option>
            <option value="pj">Pessoa Jurídica</option>
          </select>
          <select
            name="is_new_lead"
            value={form.is_new_lead ? "new" : "old"}
            onChange={(e) =>
              setForm({ ...form, is_new_lead: e.target.value === "new" })
            }
            className="w-full p-2 rounded bg-[#1a2236] text-WhiteDefault border-none"
          >
            <option value="old">Segurado</option>
            <option value="new">Novo Cliente</option>
          </select>
          <textarea
            name="demand"
            placeholder="Demanda"
            value={form.demand}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#1a2236] text-WhiteDefault border-none min-h-[60px] focus:ring-primary-500 focus:border-none"
          />
          <select
            className="w-full p-2 rounded bg-[#1a2236] text-WhiteDefault border-none"
            name="interest_plan"
            value={form.interest_plan}
            onChange={handleChange}
            defaultValue={form.interest_plan}
          >
            {services.map((service) => (
              <option value={service.title} key={service.name}>
                {service.title}
              </option>
            ))}
          </select>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#1a2236] text-WhiteDefault border-none"
          >
            <option value="IN_PROGRESS">Em Progresso</option>
            <option value="CANCELLED">Cancelado</option>
            <option value="NOT_STARTED">Não Iniciado</option>
            <option value="DONE">Concluído</option>
          </select>
        </div>
        <SheetFooter className="mt-4 flex gap-2">
          <SheetClose asChild>
            <Button
              variant="outline"
              type="button"
              onClick={onClose}
              disabled={isPending}
              className="text-WhiteDefault bg-transparent"
            >
              Cancelar
            </Button>
          </SheetClose>
          <Button
            type="button"
            onClick={handleSave}
            disabled={
              !form.name ||
              !form.email ||
              !form.phone ||
              !form.demand ||
              isPending
            }
            className="bg-primary-500 text-white"
          >
            {isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Salvar"
            )}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
