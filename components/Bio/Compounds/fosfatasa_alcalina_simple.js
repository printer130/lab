import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'
export default function FosfatasaAlcaline ({
  value,
  onChange,
  values,
  register,
  pdf,
  reagents
}) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ value: 'fosfatasa_alcalina_simple' })
  return (

    <>
      <section>
        <h3>Fosfatasa Alcaline</h3>
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
          placeholder='Fosfatasa Alcaline....'
          name='fosfatasa_alcalina_simple'
        />
      </section>
    </>
  )
}
