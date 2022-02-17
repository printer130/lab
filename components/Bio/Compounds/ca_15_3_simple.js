import { Input } from '../Input'

export default function CA_15_3 ({ value, pdf, values, onChange, register }) {
  return (
    <section>
      <h3>CA - 15.3</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='CA - 15.3...'
        name='ca_15_3_simple'
      />
    </section>
  )
}
