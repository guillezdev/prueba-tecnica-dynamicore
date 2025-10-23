import useUserForm from "@/hooks/use-user-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import FormField from "@/components/form/form-field";
import {
  Loader2Icon,
  UserIcon,
  MailIcon,
  CheckCircleIcon,
  XIcon,
} from "lucide-react";

const UserForm = () => {
  const {
    formData,
    submittedData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    clearSubmittedData,
    resetForm,
  } = useUserForm();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            Crear nuevo Usuario
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
              id="name"
              label="Nombre"
              type="text"
              placeholder="Ingresa tu nombre completo"
              value={formData.name}
              onChange={(value) => handleInputChange("name", value)}
              error={errors.name}
              required
              disabled={isSubmitting}
            />
            <FormField
              id="email"
              label="Email"
              type="email"
              placeholder="ejemplo@correo.com"
              value={formData.email}
              onChange={(value) => handleInputChange("email", value)}
              error={errors.email}
              required
              disabled={isSubmitting}
            />

            <div className="flex gap-3 pt-2">
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? (
                  <>
                    <Loader2Icon className="h-4 w-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={resetForm}
                disabled={isSubmitting}
              >
                Limpiar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {submittedData && (
        <Card className="border-green-200 dark:border-green-800">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                <CheckCircleIcon className="h-5 w-5" />
                Usuario Creado
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearSubmittedData}
                className="text-green-700 hover:text-green-800 dark:text-green-400 cursor-pointer"
              >
                <XIcon className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <UserIcon className="h-4 w-4 text-muted-foreground" />
                <div>
                  <span className="text-sm text-muted-foreground">Nombre:</span>
                  <p className="font-medium">{submittedData.name}</p>
                </div>
              </div>

              <Separator />

              <div className="flex items-center gap-3">
                <MailIcon className="h-4 w-4 text-muted-foreground" />
                <div>
                  <span className="text-sm text-muted-foreground">Email:</span>
                  <p className="font-medium">{submittedData.email}</p>
                </div>
              </div>

              <div className="pt-2">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                >
                  Formulario completado correctamente
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UserForm;
