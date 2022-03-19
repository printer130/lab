import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function ColesterolLDL ({ sex, reagents, value, pdf, values, onChange, register }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ sex, value: 'colesterol_ldl_simple' })

  return (
    <section>
      <h3>Colesterol LDL</h3>
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
        placeholder='Colesterol LDL....'
        name='colesterol_ldl_simple'
      />
    </section>
  )
}
