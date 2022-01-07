import { Input } from '../Input'

export default function HerperTipo2HSV2IgM ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Herper tipo 2 (HSV2) - IgM</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Herper tipo 2 (HSV2) - IgM....'
          name='herpes_tipo_2_h_s_v_2_ig_m_simple'
        />
      </section>
    </>
  )
}
