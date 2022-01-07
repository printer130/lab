import { Input } from '../Input'

export default function AnticardiolipinaIgM ({
  onChange,
  value,
  register,
  required,
  values
}) {
  return (
    <>
      <h2>Anticardiolipina - IgM</h2>
      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        name='anticardiolipina_ig_m'
        measure='U/mL'
        type='number'
        placeholder='Anticardiolipina - IgM...'
      >
        Anticardiolipina - IgM
      </Input>
    </>
  )
}
