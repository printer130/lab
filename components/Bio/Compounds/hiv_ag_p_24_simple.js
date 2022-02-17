import { Input } from '../Input'

export default function HIVAgP24 ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>HIV AgP24</h3>
        <Input
          pdf={pdf}
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
