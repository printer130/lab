import { Input } from '../Input'

export default function TIBC ({ register, value, values, pdf, onChange }) {
  return (
    <>
      <section>
        <h3>TIBC</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChagen={onChange}
          register={register}
          name='tibc_simple'
          type='number'
        />
      </section>
    </>
  )
}
