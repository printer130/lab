import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function ASTOCuantitativo ({
  value,
  values,
  onChange,
  register,
  reagents,
  sex,
  pdf
}) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ value: 'asto_cuantitativo_simple', sex })

  return (
    <>
      <h3>ASTO Cuantitativo</h3>
      {
        reagents &&
          <ReferenceValue
            measurement={measurement}
            reference={reference}
            brand={brand}
          />
      }
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
