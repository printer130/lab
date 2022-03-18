import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function GPT ({ reagents, value, values, pdf, onChange, register }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ value: 'gpt_simple' })

  return (
    <>
      <section>
        <h3>GPT</h3>
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
          placeholder='GPT....'
          name='gpt_simple'
        />
      </section>
    </>
  )
}
