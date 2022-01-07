import { Input } from '../Input'

export default function ProteinaDeBenceJonce ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Proteina de Bence-Jonce</h2>
        <Input
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
