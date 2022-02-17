import { Input } from '../Input'

export default function SHBG ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>SHBG</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='SHBG....'
          name='shbg_simple'
        />
      </section>
    </>
  )
}
