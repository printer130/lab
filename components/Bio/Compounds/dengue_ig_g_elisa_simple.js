import { Input } from '../Input'

export default function DengueIgGELISA ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Dengue - IgG (ELISA)</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='Dengue - IgG (ELISA)....'
          name='dengue_ig_g_elisa_simple'
        />
      </section>
    </>
  )
}
