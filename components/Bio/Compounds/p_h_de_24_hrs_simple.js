import { Input } from '../Input'

export default function PhDe24hrs ({ value, values, pdf, onChange, register }) {
  return (
    <>
      <section>
        <h3>pH de 24hrs.</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='pH de 24 hrs....'
          name='p_h_de_24_hrs_simple'
        />
      </section>
    </>
  )
}
