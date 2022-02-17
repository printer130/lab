import { Input } from '../Input'

export default function UreaBUN ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Urea/BUN</h3>
        <Input
          pdf={pdf}
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
