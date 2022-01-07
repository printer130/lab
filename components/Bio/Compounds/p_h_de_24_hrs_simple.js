import { Input } from '../Input'

export default function PhDe24hrs ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>pH de 24hrs.</h2>
        <Input
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
