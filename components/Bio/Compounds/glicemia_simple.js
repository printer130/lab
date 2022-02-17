import { Input } from '../Input'

export default function Glicemia ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Glicemia</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Glicemia....'
          name='glicemia_simple'
        />
      </section>
    </>
  )
}
