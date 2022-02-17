import { Input } from '../Input'

export default function ASTOCuantitativo ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <h3>ASTO Cuantitativo</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='ASTO Cuantitativo....'
        name='asto_cuantitativo_simple'
      />
    </>
  )
}
