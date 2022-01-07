import { Input } from '../Input'

export default function InsulinaBasal ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Insulina Basal</h2>
        <Input
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
