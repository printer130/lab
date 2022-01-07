import { Input } from '../Input'

export default function IGF1 ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>IGF - 1</h2>
        <Input
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
