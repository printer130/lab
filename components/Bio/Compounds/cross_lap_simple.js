import { Input } from '../Input'

export default function CrossLap ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Cross Lap</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Cross Lap....'
          name='cross_lap_simple'
        />
      </section>
    </>
  )
}
