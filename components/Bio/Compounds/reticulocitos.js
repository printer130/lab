import { Input } from '../Input'

export default function Reticulocitos ({ onChange, value, values, register }) {
  return (
    <>
      <h2>Reticulocitos</h2>

      <Input
        value={!values?.corregidos ? value : values.corregidos}
        register={register}
        onChange={onChange}
        measure='%'
        name='reticulocitos.corregidos'
        placeholder='reticulocitos corregidos...'
        type='number'
      >
        Reticulocitos Corregidos
      </Input>

      <Input
        value={!values?.produccion ? value : values.produccion}
        name='reticulocitos.produccion'
        register={register}
        onChange={onChange}
        placeholder='Indice de producción de reticulocitos...'
        type='number'
      >
        Indice de producción de reticulocitos
      </Input>

      <Input
        register={register}
        onChange={onChange}
        measure='%'
        value={!values?.porcentaje ? value : values.porcentaje}
        name='reticulocitos.porcentaje'
        placeholder='reticulocitos_%...'
        type='number'
      >
        % de reticulocitos:
      </Input>
    </>
  )
}
