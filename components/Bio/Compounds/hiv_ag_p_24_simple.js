import { Input } from '../Input'

export default function HIVAgP24 ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>HIV AgP24</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='HIV Ag P24 ....'
          name='hiv_ag_p_24_simple'
        />
      </section>
    </>
  )
}
