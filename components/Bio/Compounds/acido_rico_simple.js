import { Input } from '../Input'

export default function AcidoUrico ({ values, value, onChange, register }) {
  return (
    <>
      <section>
        <h2>Acido Urico</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Acido Urico....'
          name='acido_rico_simple'
        />
      </section>
    </>
  )
}
