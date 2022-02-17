import { Input } from '../Input'

export default function MagnesioMg ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Magnesio Mg</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Magnesio Mg....'
          name='magnesio_mg_simple'
        />
      </section>
    </>
  )
}
