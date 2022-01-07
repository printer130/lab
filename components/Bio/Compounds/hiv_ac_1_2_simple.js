import { Input } from '../Input'

export default function HIVAc12 ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>HIV Ac 1-2</h2>
        <Input
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
