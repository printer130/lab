import { Input } from '../Input'

export default function HIVWestBlot ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>HIV West. Blot</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='HIV West. Blot ....'
          name='hiv_west_blot_simple'
        />
      </section>
    </>
  )
}
