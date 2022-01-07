import { Input } from '../Input'

export default function Beta2MicriAlb ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Beta 2 MicroAlb</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Beta 2 MicroAlb...'
          name='beta_2_micro_alb_simple'
        />
      </section>
    </>
  )
}
