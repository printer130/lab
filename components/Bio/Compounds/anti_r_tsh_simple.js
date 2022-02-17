import { Input } from '../Input'

export default function AntirTSH ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Anti r-TSH</h3>
        <Input
          pdf={pdf}
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
