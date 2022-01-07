import { Input } from '../Input'

export default function GGT ({ value, onChange, register, values }) {
  return (
    <>
      <section>
        <h2>GGT</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='GGT....'
          name='ggt_simple'
        />
      </section>
    </>
  )
}
