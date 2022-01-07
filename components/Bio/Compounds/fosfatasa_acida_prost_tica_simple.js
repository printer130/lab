import { Input } from '../Input'
export default function FosfatasaAcidaProstatica ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Fosfatasa Acida Prostatica</h2>
        <Input
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
