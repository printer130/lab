import { Input } from '../Input'

export default function Epinefrina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Epinefrina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Epinefrina...'
          name='epinefrina_simple'
        />
      </section>
    </>
  )
}
