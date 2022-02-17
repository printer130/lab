import { Input } from '../Input'

export default function T4Libre ({ value, values, onChange, register, pdf }) {
  return (
    <>
      <section>
        <h3>T4 Libre</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='T4 Libre....'
          name='t_4_libre_simple'
        />
      </section>
    </>
  )
}
