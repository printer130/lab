import { Input } from '../Input'

export default function CalcioCa ({ value, onChange, register, values }) {
  return (
    <>
      <section>
        <h2>Calcio Ca</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Calcio Ca....'
          name='calcio_ca_simple'
        />
      </section>
    </>
  )
}
