import { onCi } from './onCi'

export const REGISTER_VALUES = ({ errors }) => [
  {
    type: 'number',
    error: errors?.ci,
    label: 'Carnet de identidad: ',
    placeholder: 'C.I',
    name: 'ci',
    options: {
      valueAsNumber: true,
      onChange: e => onCi(e.target.value)
    }
  },
  {
    type: 'text',
    label: 'Nombre Completo',
    error: errors?.fullName,
    placeholder: 'Nombre Completo...',
    name: 'fullName',
    options: {}
  },
  {
    type: 'date',
    label: 'Fecha de nacimiento',
    placeholder: 'Fecha de Nacimiento',
    name: 'birth',
    options: {
      valueAsDate: true
    }
  },
  {
    type: 'number',
    label: 'Número de celular',
    error: errors?.phone,
    placeholder: 'Celular',
    name: 'phone',
    options: {
      valueAsNumber: true
    }
  },
  {
    type: 'number',
    error: errors?.nit,
    label: 'N.I.T.',
    placeholder: 'NIT',
    name: 'nit',
    options: {
      valueAsNumber: true
    }
  },
  {
    label: 'Razon Social',
    type: 'text',
    placeholder: 'Razon Social',
    name: 'socialReason',
    options: {}
  },
  {
    label: 'Nombre del médico',
    type: 'text',
    placeholder: 'Médico...',
    name: 'doctor',
    options: {}
  }
]
