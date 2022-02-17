import { Input } from '../Input'

export default function ACTH ({ values, pdf, value, onChange, register }) {
  return (
    <>
      <section>
        <h3>ACTH</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='ACTH....'
          name='acth_simple'
        />
      </section>
    </>
  )
}
