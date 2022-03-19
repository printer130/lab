import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function Trigliceridos ({ sex, reagents, value, pdf, onChange, values, register }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ sex, value: 'triglic_ridos_simple' })

  return (
    <>
      <section>
        <h3>Trigliceridos</h3>
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
          name='triglic_ridos_simple'
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Trigliceridos....'
        />
      </section>
    </>
  )
}
