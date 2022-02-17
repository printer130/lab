import { Input } from '../Input'

export default function TestosteronaLibre ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Testosterona Libre</h3>
        <Input
          pdf={pdf}
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
