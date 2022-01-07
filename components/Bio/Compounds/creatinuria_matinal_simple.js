import { Input } from '../Input'

export default function CreatinuriaMatinal ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Creatinuria Matinal</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Creatinuria Matinal....'
          name='creatinuria_matinal_simple'
        />
      </section>
    </>
  )
}
