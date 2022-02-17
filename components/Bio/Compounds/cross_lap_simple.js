import { Input } from '../Input'

export default function CrossLap ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Cross Lap</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='Cross Lap....'
          name='cross_lap_simple'
        />
      </section>
    </>
  )
}
