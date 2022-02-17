import { Input } from '../Input'

export default function COVID19AcNeutralizantes ({
  value,
  values,
  onChange,
  pdf,
  register
}) {
  return (
    <>
      <section>
        <h3>COVID 19 (Ac. Neutralizantes)</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          type='number'
          onChange={onChange}
          placeholder='COVID 19 (Ac. Neutralizantes)....'
          register={register}
          name='covid_19_ac_neutralizantes_simple'
        />
      </section>
    </>
  )
}
