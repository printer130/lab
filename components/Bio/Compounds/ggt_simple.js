import { Input } from '../Input'

export default function GGT ({ value, pdf, onChange, register, values }) {
  return (
    <>
      <section>
        <h3>GGT</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          pdf={pdf}
          placeholder='GGT....'
          name='ggt_simple'
        />
      </section>
    </>
  )
}
