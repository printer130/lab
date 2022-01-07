import { Input } from '../Input'

export default function B2Microalb ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>B2 Microalb</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='B2 Microalb...'
          name='b_2_microalb_simple'
        />
      </section>
    </>
  )
}
