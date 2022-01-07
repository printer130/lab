import { Input } from '../Input'

export default function FeSerico ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Fe Sérico</h2>
        <Input
          value={!values ? value : values}
          onChagen={onChange}
          register={register}
          name='fe_s_rico_simple'
          type='number'
        />
      </section>
    </>
  )
}
