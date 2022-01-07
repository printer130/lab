import { Input } from '../Input'

export default function HormDecrecimientoHGH ({
  value,
  onChange,
  register,
  values
}) {
  return (
    <>
      <section>
        <h2>Horm. de crecimiento (HGH) </h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Horm. de crecimiento (HGH) ....'
          name='horm_de_crecimiento_hgh_simple'
        />
      </section>
    </>
  )
}
