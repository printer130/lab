import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function HemoglobinaGlicosilada1 ({
  onChange,
  value,
  sex,
  values,
  register,
  pdf,
  reagents
}) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ sex, value: 'hb_glicosilada_a_1' })

  return (
    <>
      <h2>Hemoglobina Glicosilada 1</h2>
      {
      reagents &&
        <ReferenceValue
          measurement={measurement}
          brand={brand}
          reference={reference}
        />
    }
      <Input
        value={!values?.hemoglobina ? value : values.hemoglobina}
        register={register}
        pdf={pdf}
        onChange={onChange}
        name='hb_glicosilada_a_1.hemoglobina'
        type='number'
        measure='%'
        placeholder='hemoglobina_glicosilada_1...'
      />
      <Remarks
        pdf={pdf}
        value={!values?.remarks ? value : values.remarks}
        register={register}
        name='hb_glicosilada_a_1.remarks'
      />
    </>
  )
}
