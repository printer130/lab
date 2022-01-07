import { Input } from '../Input'

export default function UreaBUN ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Urea/BUN</h2>
        <Input
          value={!values ? value : values}
          name='urea_bun_simple'
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Urea/BUN....'
        />
      </section>
    </>
  )
}
