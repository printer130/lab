import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function ColesterolHDL ({ reagents, value, pdf, values, onChange, register }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ value: 'colesterol_hdl_simple' })

  return (
    <section>
      <h3>Colesterol HDL</h3>
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
        placeholder='Colesterol HDL....'
        name='colesterol_hdl_simple'
      />
    </section>
  )
}
