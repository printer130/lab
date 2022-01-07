import { Input } from '../Input'

export default function ElectroforesisDeProteinas ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Electroforesis de Proteinas</h2>
        <Input
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
