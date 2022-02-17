import { Input } from '../Input'

export default function T3Libre ({ value, values, pdf, onChange, register }) {
  return (
    <>
      <section>
        <h3>T3 libre</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='T3 libre....'
          name='t_3_libre_simple'
        />
      </section>
    </>
  )
}
