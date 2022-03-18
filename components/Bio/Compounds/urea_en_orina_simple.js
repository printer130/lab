import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function UreaEnOrina ({ value, pdf, values, onChange, register, reagents }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ value: 'urea_en_orina_simple' })

  return (
    <>
      <section>
        <h3>Urea en Orina</h3>
        {
          reagents &&
            <ReferenceValue
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
          placeholder='Urea en Orina....'
          name='urea_en_orina_simple'
        />
      </section>
    </>
  )
}
