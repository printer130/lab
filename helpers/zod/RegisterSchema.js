import { z } from 'zod'

export const registerSchema = z.object({
  ci: z
    .number({
      invalid_type_error: 'Numero inválido',
      required_error: 'Debe ser un numero',
      description: 'Debe ser un numero'
    })
    .int({ message: 'Campo obligatorio.' }),
  fullName: z.string().min(3, 'Nombre completo requerido'),
  birth: z.date({
    invalid_type_error: 'Tipo de fecha inválido',
    required_error: 'Fecha Obligatoria',
    description: 'Fecha de nacimiento'
  }),
  phone: z
    .number({
      invalid_type_error: 'Numero inválido',
      required_error: 'Debe ser un numero',
      description: 'Debe ser un numero'
    })
    .int(),
  nit: z
    .number({
      description: 'Se espera un número',
      invalid_type_error: 'Numero inválido',
      required_error: 'Campo requerido'
    })
    .int({ message: 'Numero debe ser entero' }),
  reason: z
    .string({
      invalid_type_error: 'Campo inválido',
      required_error: 'Campo obligatorio',
      description: 'Campo obligatorio'
    })
    .min(3, {
      message: 'Minimo 3 caracteres'
    }),
  doctor: z
    .string({
      invalid_type_error: 'Campo inválido',
      required_error: 'Campo obligatorio',
      description: 'Campo obligatorio'
    })
    .min(5, {
      message: 'Minimo 3 caracteres'
    }),
  sex: z.string()
})
