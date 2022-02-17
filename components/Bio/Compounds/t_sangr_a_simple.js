import { Input } from '../Input'

export default function TSangria ({ value, onChange, values, register, pdf }) {
  return (
    <>
      <section>
        <h3>T. Sangria</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          placeholder='T. Sangria'
          name='t_sangr_a_simple'
        />
      </section>
    </>
  )
}
