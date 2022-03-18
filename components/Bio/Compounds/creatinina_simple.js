import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function Creatinina ({ reagents, value, pdf, values, onChange, register }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ value: 'creatinina_simple' })

  return (
    <>
      <section>
        <h3>Creatinina</h3>
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
          placeholder='Creatinina....'
          name='creatinina_simple'
        />
      </section>
    </>
  )
}
