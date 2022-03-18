import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function Glicemia ({ value, pdf, values, onChange, register, reagents }) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ value: 'glicemia_simple' })

  return (
    <>
      <section>
        <h3>Glicemia</h3>
        {reagents &&
          <ReferenceValue
            measurement={measurement}
            reference={reference}
            brand={brand}
          />}
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Glicemia....'
          name='glicemia_simple'
        />
      </section>
    </>
  )
}
