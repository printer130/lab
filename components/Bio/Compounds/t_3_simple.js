import { Input } from '../Input'

export default function T3 ({ value, onChange, values, pdf, register }) {
  return (
    <>
      <section>
        <h3>T3</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='T3....'
          name='t_3_simple'
        />
      </section>
    </>
  )
}
