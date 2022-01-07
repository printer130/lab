import { Input } from '../Input'

export default function MicoplasmaIgM ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Micoplasma - IgM</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Micoplasma - IgM....'
          name='micoplasma_ig_m_simple'
        />
      </section>
    </>
  )
}
