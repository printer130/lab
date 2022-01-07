import { Input } from '../Input'

export default function Procalcitonina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Procalcitonina</h2>
        <Input
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
