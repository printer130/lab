import { Input } from '../Input'

export default function Lienteria ({ onChange, values, value, register }) {
  return (
    <>
      <h2>Inhibidor Lúpidico</h2>
      <Input
        type='text'
        name='lienter_a'
        placeholder='lienteria'
        register={register}
        value={!values ? value : values}
        onChange={onChange}
      >
        Lienteria
      </Input>
    </>
  )
}
