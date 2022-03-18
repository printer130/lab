import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function GGT ({ reagents, value, pdf, onChange, register, values }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ value: 'ggt_simple' })

  return (
    <>
      <section>
        <h3>GGT</h3>
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
          type='number'
          pdf={pdf}
          placeholder='GGT....'
          name='ggt_simple'
        />
      </section>
    </>
  )
}
