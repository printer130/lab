import { Input } from '../Input'

export default function Glicemia ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Glicemia</h2>
        <Input
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
