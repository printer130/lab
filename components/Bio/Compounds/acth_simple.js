import { Input } from '../Input'

export default function ACTH ({ values, value, onChange, register }) {
  return (
    <>
      <section>
        <h2>ACTH</h2>
        <Input
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
