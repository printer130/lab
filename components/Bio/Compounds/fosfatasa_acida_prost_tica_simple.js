import { Input } from '../Input'
export default function FosfatasaAcidaProstatica ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Fosfatasa Acida Prostatica</h3>
        <Input
          pdf={pdf}
          value={!values ? values : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Fosfatasa Acida Prostatica....'
          name='fosfatasa_acida_prost_tica_simple'
        />
      </section>
    </>
  )
}
