import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function PCRCuantitativo ({
  value,
  values,
  sex,
  onChange,
  register,
  pdf,
  reagents
}) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ sex, value: 'pcr_cuantitativo_simple' })

  return (
    <>
      <section>
        <h3>PCR Cuantitativo</h3>
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
          placeholder='PCR Cuantitativo....'
          name='pcr_cuantitativo_simple'
        />
      </section>
    </>
  )
}
