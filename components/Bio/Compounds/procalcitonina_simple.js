import { Input } from '../Input'

export default function Procalcitonina ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Procalcitonina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Procalcitonina....'
          name='procalcitonina_simple'
        />
      </section>
    </>
  )
}
