import { Input } from '../Input'

export default function CA_125 ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>CA - 125</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='CA - 125...'
          name='ca_125_simple'
        />
      </section>
    </>
  )
}
