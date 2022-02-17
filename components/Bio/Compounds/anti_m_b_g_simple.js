import { Input } from '../Input'

export default function AntiMBG ({ value, values, pdf, onChange, register }) {
  return (
    <>
      <section>
        <h3>Anti M.B.G.</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='Anti M.B.G.....'
          name='anti_m_b_g_simple'
        />
      </section>
    </>
  )
}
