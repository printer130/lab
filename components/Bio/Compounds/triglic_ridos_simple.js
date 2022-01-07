import { Input } from '../Input'

export default function Trigliceridos ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>Trigliceridos</h2>
        <Input
          value={!values ? value : values}
          name='triglic_ridos_simple'
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Trigliceridos....'
        />
      </section>
    </>
  )
}
