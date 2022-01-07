import { Input } from '../Input'

export default function vitaminac ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Vitamina C</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Vitamina C...'
          name='vitamina_c_simple'
        />
      </section>
    </>
  )
}
