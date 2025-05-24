import { mappedErrors } from "@/constants/errors";
import { toast } from "sonner";

export function errorHandler(error: Error) {
    const errorMessage = mappedErrors[error.message] || 'Algo de errado aconteceu, tente novamente.';

    toast.error(errorMessage, {
        style: { backgroundColor: '#EE1B22', color: 'white' },
        position: 'bottom-right',
        duration: 2500
    });
}