import { Input } from '../Input'

export default function Norepinefriuna ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Norepinefriuna</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Norepinefriuna...'
          name='norepinefrina_simple'
        />
      </section>
    </>
  )
}
