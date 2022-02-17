import { Input } from '../Input'

export default function AnticardiolipinaIgM ({
  onChange,
  value,
  register,
  required,
  values,
  pdf
}) {
  return (
    <>
      <h3>Anticardiolipina - IgM</h3>
      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        pdf={pdf}
        name='anticardiolipina_ig_m'
        measure='U/mL'
        type='number'
        placeholder='Anticardiolipina - IgM...'
      />
    </>
  )
}
