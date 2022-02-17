import { Input } from '../Input'

export default function Norepinefriuna ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Norepinefriuna</h3>
        <Input
          pdf={pdf}
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
