import { Input } from '../Input'

export default function IgE ({ value, onChange, pdf, register, values }) {
  return (
    <>
      <section>
        <h3>IgE</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='IgE....'
          name='ig_e_simple'
        />
      </section>
    </>
  )
}
