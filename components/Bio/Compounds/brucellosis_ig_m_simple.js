import { Input } from '../Input'

export default function BrucellosisIgM ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Brucellosis IgM</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Brucellosis IgM....'
          name='brucellosis_ig_m_simple'
        />
      </section>
    </>
  )
}
