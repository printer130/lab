import { Input } from '../Input'

export default function ACTHAMPM ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>ACTH AM - PM</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          pdf={pdf}
          register={register}
          type='number'
          placeholder='ACTH AM - PM....'
          name='acth_am_pm_simple'
        />
      </section>
    </>
  )
}
