import { Input } from '../Input'

export default function TroponinaI ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Troponina I</h3>
        <Input
          pdf={pdf}
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
