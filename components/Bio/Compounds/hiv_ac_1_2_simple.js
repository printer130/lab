import { Input } from '../Input'

export default function HIVAc12 ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>HIV Ac 1-2</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='HIV Ac 1-2 ....'
          name='hiv_ac_1_2_simple'
        />
      </section>
    </>
  )
}
