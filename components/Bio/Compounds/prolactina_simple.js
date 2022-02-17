import { Input } from '../Input'

export default function Prolactina ({ value, pdf, onChange, values, register }) {
  return (
    <>
      <section>
        <h3>Prolactina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Prolactina....'
          name='prolactina_simple'
        />
      </section>
    </>
  )
}
