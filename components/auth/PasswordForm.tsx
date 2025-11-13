"use client"

import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {Loader2} from "lucide-react"
import {Button} from "@/components/ui/button"
import {PasswordInput} from "./PasswordInput"
import {type PasswordFormData, passwordFormSchema} from "@/lib/validators"

interface PasswordFormProps {
    onSubmit: (password: string) => Promise<void>
    submitButtonText: string
    isLoading?: boolean
}

export function PasswordForm({ onSubmit, submitButtonText, isLoading = false }: PasswordFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PasswordFormData>({
        resolver: zodResolver(passwordFormSchema),
    })

    const handleFormSubmit = async (data: PasswordFormData) => {
        await onSubmit(data.password)
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            <PasswordInput
                {...register("password")}
                id="password"
                label="Nueva contraseña"
                placeholder="Ingresa tu nueva contraseña"
                error={errors.password?.message}
                disabled={isLoading}
                autoComplete="new-password"
            />

            <PasswordInput
                {...register("confirmPassword")}
                id="confirmPassword"
                label="Confirmar contraseña"
                placeholder="Confirma tu nueva contraseña"
                error={errors.confirmPassword?.message}
                disabled={isLoading}
                autoComplete="new-password"
            />

            <div className="bg-muted rounded-lg p-4 space-y-2">
                <p className="text-sm font-medium">La contraseña debe contener:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Al menos 8 caracteres
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Una letra mayúscula
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Una letra minúscula
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Un número
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Un carácter especial (!@#$%^&*...)
                    </li>
                </ul>
            </div>

            <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Procesando...
                    </>
                ) : (
                    submitButtonText
                )}
            </Button>
        </form>
    )
}