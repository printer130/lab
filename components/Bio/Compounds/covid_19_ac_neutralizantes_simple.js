import { Input } from '../Input'

export default function COVID19AcNeutralizantes ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>COVID 19 (Ac. Neutralizantes)</h2>
        <Input
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
