import { Input } from '../Input'

export default function Lienteria ({ onChange, pdf, values, value, register }) {
  return (
    <>
      <h3>Inhibidor Lúpidico</h3>
      <Input
        pdf={pdf}
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
