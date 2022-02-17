import { Input } from '../Input'

export default function CreatinuriaMatinal ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Creatinuria Matinal</h3>
        <Input
          pdf={pdf}
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
