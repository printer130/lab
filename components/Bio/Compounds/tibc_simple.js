import { Input } from '../Input'

export default function TIBC ({ register, value, values, onChange }) {
  return (
    <>
      <section>
        <h2>TIBC</h2>
        <Input
          value={!values ? value : values}
          onChagen={onChange}
          register={register}
          name='tibc_simple'
          type='number'
        />
      </section>
    </>
  )
}
