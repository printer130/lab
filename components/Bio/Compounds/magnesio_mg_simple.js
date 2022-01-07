import { Input } from '../Input'

export default function MagnesioMg ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Magnesio Mg</h2>
        <Input
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
