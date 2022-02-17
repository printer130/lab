import { Input } from '../Input'

export default function T4 ({ value, values, onChange, register, pdf }) {
  return (
    <>
      <section>
        <h3>T4</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='T4....'
          name='t_4_simple'
        />
      </section>
    </>
  )
}
