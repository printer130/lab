import { Input } from '../Input'

export default function IGFBP3 ({ value, onChange, register, values }) {
  return (
    <>
      <section>
        <h2>IGFBP-3</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='IGFBP-3....'
          name='igfbp_3_simple'
        />
      </section>
    </>
  )
}
