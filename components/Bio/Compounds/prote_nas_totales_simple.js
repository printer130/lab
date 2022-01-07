import { Input } from '../Input'

export default function ProteinasTotales ({
  value,
  onChange,
  values,
  register
}) {
  return (
    <>
      <section>
        <h2>Proteinas Totales</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Proteinas Totales....'
          name='prote_nas_totales_simple'
        />
      </section>
    </>
  )
}
