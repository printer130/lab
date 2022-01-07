import { Input } from '../Input'

export default function AntiMBG ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Anti M.B.G.</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Anti M.B.G.....'
          name='anti_m_b_g_simple'
        />
      </section>
    </>
  )
}
