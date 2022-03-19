import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function Amilasa ({ sex, reagents, values, pdf, value, onChange, register }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ sex, value: 'amilasa_simple' })

  return (
    <>
      <section>
        <h3>Amilasa</h3>
        {
        reagents && <ReferenceValue
          measurement={measurement}
          reference={reference}
          brand={brand}
                    />
}
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='Amilasa....'
          name='amilasa_simple'
        />
      </section>
    </>
  )
}
