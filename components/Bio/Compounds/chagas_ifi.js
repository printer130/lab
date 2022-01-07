// chagas_ifi

import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function ChagasIFI ({
  onChange,
  value,
  values,
  register,
  required
}) {
  return (
    <>
      <section>
        <h2>Chagas IF</h2>
        <Input
          value={!values?.chagas_ifi ? value : values.chagas_ifi}
          register={register}
          onChange={onChange}
          name='chagas_ifi.chagas_ifi'
          type='number'
          placeholder='Chagas IFI...'
        >
          Chagas IF
        </Input>
        <Remarks
          value={!values?.remarks ? value : values.remarks}
          name='chagas_ifi.remarks'
          register={register}
        />
      </section>
    </>
  )
}
