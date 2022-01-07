import { Input } from '../Input'

export default function DHT ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>DHT</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='DHT....'
          name='dht_simple'
        />
      </section>
    </>
  )
}
