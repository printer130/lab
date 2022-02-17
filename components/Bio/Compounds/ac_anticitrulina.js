import { Input } from '../Input'

export default function AcCitrulina ({
  values,
  onChange,
  value,
  register,
  required,
  pdf
}) {
  return (
    <>
      <h3>ANTICUERPOS ANTICITRULINA</h3>
      <Input
        pdf={pdf}
        type='number'
        measure='U/mL'
        name='ac_anticitrulina'
        placeholder='Anticuerpos Anticitrulina'
        value={!values ? value : values}
        register={register}
        onChange={onChange}
      />
    </>
  )
}
