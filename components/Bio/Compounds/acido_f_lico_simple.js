import { Input } from '../Input'

export default function AcidoFolico ({ values, pdf, value, onChange, register }) {
  return (
    <>
      <section>
        <h3>Acido Fólico</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='Acido Fólico....'
          name='acido_f_lico_simple'
        />
      </section>
    </>
  )
}
