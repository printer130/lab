import { Input } from '../Input'

export default function Delta4Androstenediona ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Delta 4-Androstenediona</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='Delta 4-Androstenediona....'
          name='delta_4_androstenediona_simple'
        />
      </section>
    </>
  )
}
