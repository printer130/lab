import { Input } from '../Input'

export default function BrucellosisIgG ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Brucellosis IgG</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Brucellosis IgG....'
          name='brucellosis_ig_g_simple'
        />
      </section>
    </>
  )
}
