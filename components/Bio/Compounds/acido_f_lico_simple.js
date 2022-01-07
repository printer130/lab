import { Input } from '../Input'

export default function AcidoFolico ({ values, value, onChange, register }) {
  console.log(values)
  return (
    <>
      <section>
        <h2>Acido Fólico</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Acido Fólico....'
          name='acido_f_lico_simple'
        />
      </section>
    </>
  )
}
