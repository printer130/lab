import { Input } from '../Input'

export default function HerperTipo2HSV2IgG ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Herper tipo 2 (HSV2) - IgG</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Herper tipo 2 (HSV2) - IgG....'
          name='herpes_tipo_2_h_s_v_2_ig_g_simple'
        />
      </section>
    </>
  )
}
