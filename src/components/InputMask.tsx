import * as React from "react";
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import { cn } from "@/lib/utils";

interface MaskedInputProps extends InputMaskProps {
  className?: string;
}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <InputMask
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
        inputRef={ref} // Use `inputRef` para encaminhar o `ref`
      />
    );
  }
);

MaskedInput.displayName = "MaskedInput";

export { MaskedInput };
