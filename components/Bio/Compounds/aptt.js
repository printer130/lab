import { isEmpty } from 'utils/isEmpty'
import { Input } from '../Input'

export default function Aptt ({ onChange, value, register, required, values }) {
  const empty = !values ?? isEmpty(values)
  return (
    <>
      <h2>APTT</h2>
      <Input
        value={empty ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        name='aptt'
        measure='segundos'
        type='number'
        placeholder='APTT...'
      >
        APTT
      </Input>
    </>
  )
}
