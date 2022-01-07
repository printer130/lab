import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function Fibrinogeno ({
  onChange,
  value,
  values,
  register,
  required
}) {
  return (
    <>
      <section>
        <h2>Fibrinogeno</h2>
        <Input
          value={!values?.fibrinogeno ? value : values.fibrinogeno}
          register={register}
          onChange={onChange}
          measure='mg/dL'
          name='fibrin_geno.fibrinogeno'
          placeholder='muestra...'
          type='number'
        >
          Fibrinogeno
        </Input>
        <Remarks
          value={!values.remarks ? value : values.remarks}
          name='fibrin_geno.remarks'
          register={register}
        />
      </section>
    </>
  )
}
