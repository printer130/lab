import { Input } from '../Input'

export default function DHEAS ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>DHEAS</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='DHEAS....'
          name='dheas_simple'
        />
      </section>
    </>
  )
}
