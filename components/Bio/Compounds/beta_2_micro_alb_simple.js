import { Input } from '../Input'

export default function Beta2MicriAlb ({ value, pdf, values, onChange, register }) {
  return (
    <section>
      <h3>Beta 2 MicroAlb</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='Beta 2 MicroAlb...'
        name='beta_2_micro_alb_simple'
      />
    </section>
  )
}
