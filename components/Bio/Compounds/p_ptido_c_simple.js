import { Input } from '../Input'

export default function PeptidoC ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Peptido C</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Peptido C....'
          name='p_ptido_c_simple'
        />
      </section>
    </>
  )
}
