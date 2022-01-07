import { Input } from '../Input'

export default function ProteinuriaMatinal ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Proteinuria Matinal</h2>
        <Input
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
