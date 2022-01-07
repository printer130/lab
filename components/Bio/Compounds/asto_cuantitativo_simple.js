import { Input } from '../Input'

export default function ASTOCuantitativo ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>ASTO Cuantitativo</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='ASTO Cuantitativo....'
          name='asto_cuantitativo_simple'
        />
      </section>
    </>
  )
}
