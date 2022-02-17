import { Input } from '../Input'

export default function FeSerico ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Fe Sérico</h3>
        <Input
          pdf={pdf}
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
