export const REGISTER_VALUES = ({ errors, onFill, item }) => {
  return [
    {
      v: item?.ci || undefined,
      type: 'number',
      error: errors?.ci,
      label: 'Carnet de Identidad: ',
      placeholder: 'C.I',
      order: 1,
      name: 'ci',
      options: {
        valueAsNumber: true,
        onChange: e => onFill(e.target.value)
      }
    },
    {
      type: 'text',
      v: item?.fullName || undefined,
      label: 'Nombre Completo',
      error: errors?.fullName,
      placeholder: 'Nombre Completo...',
      order: 3,
      name: 'fullName',
      options: {}
    },
    {
      defaultValue: item?.birth && item?.birth?.split('T')[0],
      v: undefined,
      type: 'date',
      label: 'Fecha de Nacimiento',
      placeholder: 'Fecha de Nacimiento',
      order: 4,
      name: 'birth',
      options: {
        valueAsDate: true
      }
    },
    {
      v: item?.phone || undefined,
      type: 'number',
      label: 'Número de Celular',
      error: errors?.phone,
      placeholder: 'Celular',
      order: 5,
      name: 'phone',
      options: {
        valueAsNumber: true
      }
    },
    {
      v: item?.nit || undefined,
      type: 'number',
      error: errors?.nit,
      label: 'N.I.T.',
      placeholder: 'NIT',
      order: 6,
      name: 'nit',
      options: {
        valueAsNumber: true
      }
    },
    {
      v: item?.reason || undefined,
      type: 'text',
      label: 'Razon Social',
      error: errors?.reason,
      placeholder: 'Razon Social',
      order: 7,
      name: 'reason',
      options: {}
    },
    {
      v: item?.doctor || undefined,
      label: 'Médico',
      type: 'text',
      placeholder: 'Médico...',
      order: 8,
      name: 'doctor',
      options: {}
    }
  ]
}
