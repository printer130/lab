import { Input } from '../Input'

export default function Calcitonina ({ value, pdf, values, onChange, register }) {
  return (
    <section>
      <h3>Calcitonina</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='Calcitonina....'
        name='calcitonina_simple'
      />
    </section>
  )
}
