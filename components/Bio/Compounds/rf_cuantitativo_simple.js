import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function RFCuantitativo ({ value, values, pdf, onChange, register, reagents }) {
  const { data: { measurement, reference, brand, name } } = useReferenceValue({ value: 'rf_cuantitativo_simple' })

  return (
    <>
      <section>
        <h3>RF Cuantitativo</h3>
        {reagents &&
          <ReferenceValue
            measurement={measurement}
            reference={reference}
            brand={brand}
          />}
        <Input
          value={!values ? value : values}
          onChange={onChange}
          pdf={pdf}
          register={register}
          type='number'
          placeholder='RF Cuantitativo....'
          name='rf_cuantitativo_simple'
        />
      </section>
    </>
  )
}
