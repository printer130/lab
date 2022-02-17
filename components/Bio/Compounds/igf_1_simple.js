import { Input } from '../Input'

export default function IGF1 ({ value, pdf, onChange, values, register }) {
  return (
    <>
      <section>
        <h3>IGF - 1</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='IGF - 1....'
          name='igf_1_simple'
        />
      </section>
    </>
  )
}
