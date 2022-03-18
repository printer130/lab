import { Input } from '../Input'
import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'

export default function AcUricoEnOrina ({ values, pdf, value, onChange, register, reagents }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ value: 'ac_rico_en_orina_simple' })

  return (
    <>
      <section>
        <h3>Ac. Urico en orina</h3>
        {
          reagents &&
            <ReferenceValue
              measurement={measurement}
              brand={brand}
              reference={reference}
            />
        }
        <Input
          value={!values ? value : values}
          onChange={onChange}
          pdf={pdf}
          register={register}
          type='number'
          placeholder='Ac. Urico en orina....'
          name='ac_rico_en_orina_simple'
        />
      </section>
    </>
  )
}
