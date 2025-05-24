import { toast } from "sonner";

export function successAlert(message: string) {
    toast.success(message, {
        style: { backgroundColor: '#25D366', color: 'white' },
        position: 'bottom-right',
        duration: 2500
    });
}