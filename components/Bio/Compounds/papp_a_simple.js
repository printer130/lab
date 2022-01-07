import { Input } from '../Input'

export default function PAPP_A ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>PAPP-A</h2>
        <Input
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
