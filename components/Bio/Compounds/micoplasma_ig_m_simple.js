import { Input } from '../Input'

export default function MicoplasmaIgM ({ value, values, pdf, onChange, register }) {
  return (
    <>
      <section>
        <h3>Micoplasma - IgM</h3>
        <Input
          pdf={pdf}
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
