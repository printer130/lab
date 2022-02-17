import { Input } from '../Input'

export default function ProteinuriaMatinal ({
  value,
  values,
  onChange,
  pdf,
  register
}) {
  return (
    <>
      <section>
        <h3>Proteinuria Matinal</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Proteinuria Matinal....'
          name='proteinuria_matinal_simple'
        />
      </section>
    </>
  )
}
