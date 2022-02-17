import { Input } from '../Input'

export default function GPT ({ value, values, pdf, onChange, register }) {
  return (
    <>
      <section>
        <h3>GPT</h3>
        <Input
          pdf={pdf}
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
