import { Input } from '../Input'

export default function HormDecrecimientoHGH ({
  value,
  onChange,
  register,
  values,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Horm. de crecimiento (HGH) </h3>
        <Input
          pdf={pdf}
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
