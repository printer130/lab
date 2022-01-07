import { Input } from '../Input'

export default function GotaGruesa ({
  onChange,
  value,
  values,
  register,
  required
}) {
  return (
    <>
      <h2>Gota Gruesa</h2>
      <Input
        value={!values ? value : values}
        name='gota_gruesa'
        register={register}
        onChange={onChange}
        type='text'
        placeholder='gota gruesa...'
      >
        Gota Gruesa
      </Input>
    </>
  )
}
