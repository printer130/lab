import { Input } from '../Input'

export default function AntirTSH ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Anti r-TSH</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Anti r-TSH....'
          name='anti_r_tsh_simple'
        />
      </section>
    </>
  )
}
