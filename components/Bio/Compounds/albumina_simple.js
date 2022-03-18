import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function Albumina ({ reagents, values, pdf, value, onChange, register }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ value: 'albumina_simple' })

  return (
    <>
      <section>
        <h3>Albumina</h3>
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
          placeholder='Albumina....'
          name='albumina_simple'
        />
      </section>
    </>
  )
}
