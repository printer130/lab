// chagas_ifi

import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function ChagasIFI ({
  onChange,
  value,
  values,
  register,
  pdf,
  required
}) {
  return (
    <section>
      <h3>Chagas IF</h3>
      <Input
        pdf={pdf}
        value={!values?.chagas_ifi ? value : values.chagas_ifi}
        register={register}
        onChange={onChange}
        name='chagas_ifi.chagas_ifi'
        type='number'
        placeholder='Chagas IFI...'
      />
      <Remarks
        pdf={pdf}
        value={!values?.remarks ? value : values.remarks}
        name='chagas_ifi.remarks'
        register={register}
      />
    </section>
  )
}
