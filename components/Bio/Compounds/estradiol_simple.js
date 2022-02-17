import { Input } from '../Input'

export default function Estradiol ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Estradiol</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Estradiol....'
          name='estradiol_simple'
        />
      </section>
    </>
  )
}
