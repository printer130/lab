import { Input } from '../Input'

export default function CalcioCa ({ value, pdf, onChange, register, values }) {
  return (
    <section>
      <h3>Calcio Ca</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='Calcio Ca....'
        name='calcio_ca_simple'
      />
    </section>
  )
}
