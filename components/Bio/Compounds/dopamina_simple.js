import { Input } from '../Input'

export default function Dopamina ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Dopamina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Dopamina....'
          name='dopamina_simple'
        />
      </section>
    </>
  )
}
