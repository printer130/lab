import { Input } from '../Input'

export default function Trigliceridos ({ value, pdf, onChange, values, register }) {
  return (
    <>
      <section>
        <h3>Trigliceridos</h3>
        <Input
          pdf={pdf}
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
