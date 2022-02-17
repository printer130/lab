import { Input } from '../Input'

export default function PeptidoC ({ value, values, onChange, pdf, register }) {
  return (
    <>
      <section>
        <h3>Peptido C</h3>
        <Input
          pdf={pdf}
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
