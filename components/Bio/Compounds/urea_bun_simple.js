import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function UreaBUN ({ sex, reagents, value, pdf, values, onChange, register }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ sex, value: 'urea_bun_simple' })

  return (
    <>
      <section>
        <h3>Urea/BUN</h3>
        {
      reagents &&
        <ReferenceValue
          measurement={measurement}
          brand={brand}
          reference={reference}
        />
    }
        <Input
          pdf={pdf}
          value={!values ? value : values}
          name='urea_bun_simple'
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Urea/BUN....'
        />
      </section>
    </>
  )
}
