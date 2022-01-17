import { Input } from '../Input'

export default function ATPO ({ value, onChange, register, values }) {
  return (
    <>
      <section>
        <h2>A-TPO</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='a-TPO....'
          name='a_tpo_simple'
        />
      </section>
    </>
  )
}
