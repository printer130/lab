import { Input } from '../Input'

export default function ElisaGiardia ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Elisa Giardia</h2>
        <Input
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
