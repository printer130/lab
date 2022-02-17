import { isEmpty } from 'utils/isEmpty'
import { Input } from '../Input'

export default function Aptt ({
  onChange,
  value,
  register,
  required,
  values,
  pdf
}) {
  const empty = !values ?? isEmpty(values)
  return (
    <>
      <h3>APTT</h3>
      <Input
        value={empty ? value : values}
        register={register}
        onChange={onChange}
        pdf={pdf}
        required={required}
        name='aptt'
        measure='segundos'
        type='number'
        placeholder='APTT...'
      />
    </>
  )
}
