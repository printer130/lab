import { Input } from '../Input'

export default function GPT ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>GPT</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='GPT....'
          name='gpt_simple'
        />
      </section>
    </>
  )
}
