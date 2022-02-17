import { Input } from '../Input'

export default function InsulinaBasal ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Insulina Basal</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Insulina Basal....'
          name='insulina_basal_simple'
        />
      </section>
    </>
  )
}
