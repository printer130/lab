import { Input } from '../Input'

export default function HerperTipo1HSV1IgG ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Herper tipo 1 (HSV1) - IgG</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Herper tipo 1 (HSV1) - IgG....'
          name='herpes_tipo_1_h_s_v_1_ig_g_simple'
        />
      </section>
    </>
  )
}
