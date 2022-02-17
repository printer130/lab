import { Input } from '../Input'

export default function ATPO ({ value, pdf, onChange, register, values }) {
  return (
    <>
      <section>
        <h3>A-TPO</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='a-TPO....'
          name='a_tpo_simple'
        />
      </section>
    </>
  )
}
