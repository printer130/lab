// calprotectina
import { Input } from '../Input'

export default function Calprotectina ({
  onChange,
  value,
  register,
  required,
  values
}) {
  return (
    <>
      <section>
        <h2>CALPROTECTINA</h2>
        <Input
          value={!values ? value : values}
          register={register}
          onChange={onChange}
          measure='mg/Kg'
          name='calprotectina'
          type='text'
          placeholder='Calprotectina Fecal...'
        >
          Calprotectina Fecal
        </Input>
      </section>
    </>
  )
}
