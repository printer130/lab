import { Input } from '../Input'

export default function HIVWestBlot ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>HIV West. Blot</h3>
        <Input
          pdf={pdf}
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
