import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function DDimeros ({ onChange, register, value, values }) {
  return (
    <>
      <section>
        <h2>D-Dimeros</h2>
        <Input
          value={!values?.d_dimeros ? value : values.d_dimeros}
          register={register}
          onChange={onChange}
          measure='ng/mL'
          name='d_meros_d.d_dimeros'
          placeholder='D-Dimeros...'
          type='number'
        >
          D-Dimeros:
        </Input>

        <Remarks
          value={!values?.remarks ? value : values.remarks}
          name='d_meros_d.remarks'
          register={register}
        />
      </section>
    </>
  )
}
