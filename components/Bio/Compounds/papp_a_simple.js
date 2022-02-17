import { Input } from '../Input'

export default function PAPP_A ({ value, onChange, pdf, values, register }) {
  return (
    <>
      <section>
        <h3>PAPP-A</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='PAPP-A...'
          name='papp_a_simple'
        />
      </section>
    </>
  )
}
