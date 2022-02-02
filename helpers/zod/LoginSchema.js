import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string({
    required_error: 'El nombre es requerido.',
    invalid_type_error: 'Email no es correcto'
  }).email({ message: 'Debe ser un email válido' }),
  password: z.string().min(6, { message: 'Contraseña incorrecta.' })
})
