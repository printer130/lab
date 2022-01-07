import { Input } from '../Input'

export default function AcCitrulina ({
  values,
  onChange,
  value,
  register,
  required
}) {
  return (
    <>
      <h2>Anticuerpos Anticitrulina</h2>
      <Input
        type='number'
        measure='U/mL'
        name='ac_anticitrulina'
        placeholder='Anticuerpos Anticitrulina'
        value={!values ? value : values}
        register={register}
        onChange={onChange}
      >
        Anticuerpos Anticitrulina
      </Input>
    </>
  )
}
