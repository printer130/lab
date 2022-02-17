import { Input } from '../Input'

export default function HIVElisa ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>HIV Elisa</h3>
        <Input
          pdf={pdf}
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
