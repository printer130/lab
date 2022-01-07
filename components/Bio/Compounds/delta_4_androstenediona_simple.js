import { Input } from '../Input'

export default function Delta4Androstenediona ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Delta 4-Androstenediona</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Delta 4-Androstenediona....'
          name='delta_4_androstenediona_simple'
        />
      </section>
    </>
  )
}
