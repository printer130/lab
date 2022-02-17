import { Input } from '../Input'

export default function DengueIgMELISA ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Dengue - IgM (ELISA)</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Dengue - IgM (ELISA)....'
          name='dengue_ig_m_elisa_simple'
        />
      </section>
    </>
  )
}
