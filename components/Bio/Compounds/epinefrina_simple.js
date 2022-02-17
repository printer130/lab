import { Input } from '../Input'

export default function Epinefrina ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Epinefrina</h3>
        <Input
          pdf={pdf}
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
