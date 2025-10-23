import { useState } from "react";
import { z } from "zod";

const userFormSchema = z.object({
  name: z.string().min(1, "El nombre es requerido").trim(),
  email: z
    .string()
    .min(1, "El email es requerido")
    .email("El email debe ser válido"),
});

export type UserFormData = z.infer<typeof userFormSchema>;

interface FormErrors {
  name?: string;
  email?: string;
}

function useUserForm() {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState<UserFormData | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof UserFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    try {
      userFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formErrors: FormErrors = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            formErrors[issue.path[0] as keyof FormErrors] = issue.message;
          }
        });
        setErrors(formErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (validateForm()) {
        await new Promise((resolve) => setTimeout(resolve, 500));

        setSubmittedData(formData);
        setFormData({
          name: "",
          email: "",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearSubmittedData = () => {
    setSubmittedData(null);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
    });
    setErrors({});
    setSubmittedData(null);
  };

  return {
    formData,
    submittedData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    clearSubmittedData,
    resetForm,
  };
}

export default useUserForm;
