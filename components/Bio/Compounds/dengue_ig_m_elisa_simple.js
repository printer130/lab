import { Input } from '../Input'

export default function DengueIgMELISA ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Dengue - IgM (ELISA)</h2>
        <Input
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
