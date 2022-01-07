import { Input } from '../Input'

export default function CortisonPM ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Cortison PM</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Cortison PM....'
          name='cortisol_pm_simple'
        />
      </section>
    </>
  )
}
