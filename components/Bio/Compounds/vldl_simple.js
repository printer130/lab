import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function VLDL ({ reagents, value, values, onChange, register, pdf }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ value: 'vldl_simple' })

  return (
    <>
      <section>
        <h3>VLDL</h3>
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
          pdf={pdf}
          register={register}
          type='number'
          placeholder='VLDL....'
          name='vldl_simple'
        />
      </section>
    </>
  )
}
