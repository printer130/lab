import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function AcidoUrico ({ reagents, values, pdf, value, onChange, register }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ value: 'acido_rico_simple' })

  return (
    <>
      <section>
        <h3>Acido Urico</h3>
        {reagents && <ReferenceValue
          measurement={measurement}
          reference={reference}
          brand={brand}
                     />}
        <Input
          value={!values ? value : values}
          onChange={onChange}
          pdf={pdf}
          register={register}
          type='number'
          placeholder='Acido Urico....'
          name='acido_rico_simple'
        />
      </section>
    </>
  )
}
