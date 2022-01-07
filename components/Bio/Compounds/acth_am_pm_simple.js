import { Input } from '../Input'

export default function ACTHAMPM ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>ACTH AM - PM</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='ACTH AM - PM....'
          name='acth_am_pm_simple'
        />
      </section>
    </>
  )
}
