import { Input } from '../Input'

export default function ProteinuruaDe24Horas ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Proteinuria de 24 Hrs</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          type='number'
          register={register}
          placeholder='Proteinuria de 24 Hrs'
          name='proteinuria_de_24_hrs_simple'
        />
      </section>
    </>
  )
}
