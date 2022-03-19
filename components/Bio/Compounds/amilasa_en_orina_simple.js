import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function AmilasaEnOrina ({ values, pdf, sex, value, onChange, register, reagents }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ value: 'amilasa_en_orina_simple', sex })
  return (
    <>
      <section>
        <h3>Amilasa en Orina</h3>
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
          placeholder='Amilasa en orina....'
          name='amilasa_en_orina_simple'
        />
      </section>
    </>
  )
}
