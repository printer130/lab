import { Input } from '../Input'

export default function vitaminac ({ value, values, onChange, register, pdf }) {
  return (
    <>
      <section>
        <h3>Vitamina C</h3>
        <Input
          pdf={pdf}
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
