import { Input } from '../Input'

export default function TestosteronaLibre ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Testosterona Libre</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Testosterona Libre....'
          name='testosterona_libre_simple'
        />
      </section>
    </>
  )
}
