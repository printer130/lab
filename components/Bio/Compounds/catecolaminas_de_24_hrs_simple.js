import { Input } from '../Input'

export default function CatecolaminasDe24Horas ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Catecolaminas de 24 Hrs.</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Catecolaminas de 24 Hrs.'
          name='catecolaminas_de_24_hrs_simple'
        />
      </section>
    </>
  )
}
