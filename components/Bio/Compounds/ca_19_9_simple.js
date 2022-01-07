import { Input } from '../Input'

export default function CA_19_9 ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>CA - 19.9</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='CA - 19.9...'
          name='ca_19_9_simple'
        />
      </section>
    </>
  )
}
