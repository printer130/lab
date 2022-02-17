import { Input } from '../Input'

export default function CA_125 ({ value, pdf, values, onChange, register }) {
  return (
    <section>
      <h3>CA - 125</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='CA - 125...'
        name='ca_125_simple'
      />
    </section>
  )
}
