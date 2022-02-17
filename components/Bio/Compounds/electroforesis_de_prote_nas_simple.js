import { Input } from '../Input'

export default function ElectroforesisDeProteinas ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Electroforesis de Proteinas</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Electroforesis de Proteinas....'
          name='electroforesis_de_prote_nas_simple'
        />
      </section>
    </>
  )
}
