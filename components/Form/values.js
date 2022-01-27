export const REGISTER_VALUES = ({ errors, onDebounce, item }) => {
  return [
    {
      v: item?.ci || undefined,
      type: 'number',
      error: errors?.ci,
      label: 'Carnet de identidad: ',
      placeholder: 'C.I',
      name: 'ci',
      options: {
        valueAsNumber: true,
        onChange: e => onDebounce(e.target.value)
      }
    },
    {
      v: item?.fullName || undefined,
      type: 'text',
      label: 'Nombre Completo',
      error: errors?.fullName,
      placeholder: 'Nombre Completo...',
      name: 'fullName',
      options: {}
    },
    {
      v: item?.birth || '',
      type: 'date',
      label: 'Fecha de nacimiento',
      placeholder: 'Fecha de Nacimiento',
      name: 'birth',
      options: {
        valueAsDate: true
      }
    },
    {
      v: item?.phone || undefined,
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
      v: item?.nit || undefined,
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
      v: item?.reason || undefined,
      type: 'text',
      label: 'Razon Social',
      error: errors?.reason,
      placeholder: 'Razon Social',
      name: 'reason',
      options: {}
    },
    {
      v: item?.doctor || undefined,
      label: 'Nombre del médico',
      type: 'text',
      placeholder: 'Médico...',
      name: 'doctor',
      options: {}
    }
  ]
}
