import { Input } from '../Input'

export default function ProteinaDeBenceJonce ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Proteina de Bence-Jonce</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Proteina de Bence-Jonce....'
          name='prote_na_de_bence_jonce_simple'
        />
      </section>
    </>
  )
}
