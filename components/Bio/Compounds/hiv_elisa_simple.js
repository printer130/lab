import { Input } from '../Input'

export default function HIVElisa ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>HIV Elisa</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='HIV Elisa ....'
          name='hiv_elisa_simple'
        />
      </section>
    </>
  )
}
