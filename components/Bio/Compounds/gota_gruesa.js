import { Input } from '../Input'

export default function GotaGruesa ({
  onChange,
  value,
  values,
  register,
  required,
  pdf
}) {
  return (
    <>
      <h3>Gota Gruesa</h3>
      <Input
        value={!values ? value : values}
        name='gota_gruesa'
        pdf={pdf}
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
