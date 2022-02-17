import { Input } from '../Input'

export default function BrucellosisIgG ({ value, pdf, values, onChange, register }) {
  return (
    <section>
      <h3>Brucellosis IgG</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='Brucellosis IgG....'
        name='brucellosis_ig_g_simple'
      />
    </section>
  )
}
