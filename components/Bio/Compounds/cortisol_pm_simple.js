import { Input } from '../Input'

export default function CortisonPM ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Cortison PM</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='Cortison PM....'
          name='cortisol_pm_simple'
        />
      </section>
    </>
  )
}
