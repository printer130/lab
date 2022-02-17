import { Input } from '../Input'

export default function IGFBP3 ({ value, pdf, onChange, register, values }) {
  return (
    <>
      <section>
        <h3>IGFBP-3</h3>
        <Input
          pdf={pdf}
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
