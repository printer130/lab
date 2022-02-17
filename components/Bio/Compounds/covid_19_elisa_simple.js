import { Input } from '../Input'

export default function COVID19elisa ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>COVID 19 elisa</h3>
        <Input
          pdf={pdf}
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
