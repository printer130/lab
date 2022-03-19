import { ReferenceValue } from 'components/ReferenceValue'
import { useReferenceValue } from 'hooks/useReferenceValue'
import { Input } from '../Input'

export default function LactDeshHidrogenas ({
  value,
  values,
  onChange,
  register,
  pdf,
  sex,
  reagents
}) {
  const { data: { measurement, reference, brand } } = useReferenceValue({ sex, value: 'lact_desh_hidrogenasa_simple' })

  return (
    <>
      <section>
        <h3>Lact. Desh Hidrogenasa</h3>
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
          placeholder='Lact. Desh Hidrogenasa....'
          name='lact_desh_hidrogenasa_simple'
        />
      </section>
    </>
  )
}
