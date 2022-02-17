import { Input } from '../Input'

export default function CalcioIonicoCa ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Calcio Ionico Ca++</h2>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Calcio Ionico Ca++....'
          name='calcio_i_nico_ca_simple'
        />
      </section>
    </>
  )
}
