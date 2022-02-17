import { Input } from '../Input'

export default function AcidoUrico ({ values, pdf, value, onChange, register }) {
  return (
    <>
      <section>
        <h3>Acido Urico</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          pdf={pdf}
          register={register}
          type='number'
          placeholder='Acido Urico....'
          name='acido_rico_simple'
        />
      </section>
    </>
  )
}
