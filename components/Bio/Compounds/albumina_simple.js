import { Input } from '../Input'

export default function Albumina ({ values, pdf, value, onChange, register }) {
  return (
    <>
      <section>
        <h3>Albumina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Albumina....'
          name='albumina_simple'
        />
      </section>
    </>
  )
}
