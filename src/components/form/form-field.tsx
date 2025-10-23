import { Input } from "@/components/ui/input";
import { XIcon } from "lucide-react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

const FormField = ({
  id,
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error,
  required = false,
  disabled = false,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={
          error
            ? "border-red-500 focus-visible:ring-red-500"
            : ""
        }
      />
      {error && (
        <p className="text-sm text-red-500 flex items-center gap-1">
          <XIcon className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
