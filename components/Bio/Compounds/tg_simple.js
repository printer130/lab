import { Input } from '../Input'

export default function TG ({ value, onChange, pdf, values, register }) {
  return (
    <>
      <section>
        <h3>TG</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='TG....'
          name='tg_simple'
        />
      </section>
    </>
  )
}
