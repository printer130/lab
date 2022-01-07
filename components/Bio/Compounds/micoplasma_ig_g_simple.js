import { Input } from '../Input'

export default function MicoplasmaIgG ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Micoplasma - IgG</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Micoplasma - IgG....'
          name='micoplasma_ig_g_simple'
        />
      </section>
    </>
  )
}
