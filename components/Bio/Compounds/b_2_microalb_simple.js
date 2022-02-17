import { Input } from '../Input'

export default function B2Microalb ({ value, values, pdf, onChange, register }) {
  return (
    <>
      <section>
        <h3>B2 Microalb</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          pdf={pdf}
          register={register}
          type='number'
          placeholder='B2 Microalb...'
          name='b_2_microalb_simple'
        />
      </section>
    </>
  )
}
