import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function Colesterol ({ reagents, value, values, onChange, pdf, register }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ value: 'colesterol_simple' })

  return (
    <section>
      <h3>Colesterol</h3>
      {
        reagents && <ReferenceValue
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
        placeholder='Colesterol....'
        name='colesterol_simple'
      />
    </section>
  )
}
