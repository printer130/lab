// bilirrubinas
import { Input } from '../Input'

export default function Bilirrubinas ({
  onChange,
  value,
  register,
  required,
  values
}) {
  return (
    <>
      <h2>Bilirrubinas</h2>

      <Input
        value={!values?.bilirrubina_directa ? value : values.bilirrubina_directa}
        register={register}
        onChange={onChange}
        required={required}
        name='bilirrubinas_d_t_i.bilirrubina_directa'
        measure='mg/L'
        type='number'
        placeholder='Bilirrubina Directa...'
      >
        Bilirrubina Directa
      </Input>
      <Input
        value={
          !values?.bilirrubina_indirecta ? value : values.bilirrubina_indirecta
        }
        register={register}
        onChange={onChange}
        required={required}
        name='bilirrubinas_d_t_i.bilirrubina_indirecta'
        measure='mg/L'
        type='number'
        placeholder='Bilirrubina Indirecta...'
      >
        Bilirrubina Indirecta
      </Input>
      <Input
        value={!values?.bilirrubina_total ? value : values.bilirrubina_total}
        register={register}
        onChange={onChange}
        required={required}
        name='bilirrubinas_d_t_i.bilirrubina_total'
        measure='mg/L'
        type='number'
        placeholder='Bilirrubina Total...'
      >
        Bilirrubina Total
      </Input>
    </>
  )
}
