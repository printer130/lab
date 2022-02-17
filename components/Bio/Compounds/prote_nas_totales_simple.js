import { Input } from '../Input'

export default function ProteinasTotales ({
  value,
  onChange,
  values,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Proteinas Totales</h3>
        <Input
          pdf={pdf}
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
