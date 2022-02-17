import { Input } from '../Input'

export default function MicoplasmaIgG ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Micoplasma - IgG</h3>
        <Input
          pdf={pdf}
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
