import { Input } from '../Input'

export default function TroponinaI ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Troponina I</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Troponina I....'
          name='troponina_i_simple'
        />
      </section>
    </>
  )
}
