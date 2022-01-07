import { Input } from '../Input'

export default function AnticardiolipinaIgG ({
  onChange,
  value,
  register,
  required,
  values
}) {
  return (
    <>
      <h2>Anticardiolipina - IgG</h2>

      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        name='anticardiolipina_ig_g'
        measure='U/mL'
        type='number'
        placeholder='Anticardiolipina - IgG...'
      >
        Anticardiolipina - IgG
      </Input>
    </>
  )
}
