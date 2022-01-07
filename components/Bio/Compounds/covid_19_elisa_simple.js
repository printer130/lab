import { Input } from '../Input'

export default function COVID19elisa ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>COVID 19 elisa</h2>
        <Input
          type='number'
          value={!values ? value : values}
          onChange={onChange}
          placeholder='COVID 19 elisa....'
          register={register}
          name='covid_19_elisa_simple'
        />
      </section>
    </>
  )
}
