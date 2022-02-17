import { Input } from '../Input'

export default function ATG ({ values, pdf, value, onChange, register }) {
  return (
    <>
      <section>
        <h3>A-TG</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          pdf={pdf}
          register={register}
          type='number'
          placeholder='a-TG....'
          name='a_tg_simple'
        />
      </section>
    </>
  )
}
