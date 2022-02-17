import { Input } from '../Input'

export default function ElisaGiardia ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Elisa Giardia</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Elisa Giardia...'
          name='elisa_giardia_simple'
        />
      </section>
    </>
  )
}
