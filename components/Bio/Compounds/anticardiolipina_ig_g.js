import { Input } from '../Input'

export default function AnticardiolipinaIgG ({
  onChange,
  value,
  register,
  pdf,
  required,
  values
}) {
  return (
    <section>
      <h3>Anticardiolipina - IgG</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        name='anticardiolipina_ig_g'
        measure='U/mL'
        type='number'
        placeholder='Anticardiolipina - IgG...'
      />
    </section>
  )
}
