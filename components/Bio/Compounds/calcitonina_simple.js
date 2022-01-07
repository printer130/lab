import { Input } from '../Input'

export default function Calcitonina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Calcitonina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Calcitonina....'
          name='calcitonina_simple'
        />
      </section>
    </>
  )
}
