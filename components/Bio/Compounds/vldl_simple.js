import { Input } from '../Input'

export default function VLDL ({ value, values, onChange, register, pdf }) {
  return (
    <>
      <section>
        <h3>VLDL</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          pdf={pdf}
          register={register}
          type='number'
          placeholder='VLDL....'
          name='vldl_simple'
        />
      </section>
    </>
  )
}
