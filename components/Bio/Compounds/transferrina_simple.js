import { Input } from '../Input'

export default function Transferrina ({ register, pdf, values, value, onChagen }) {
  return (
    <>
      <section>
        <h3>Transferrina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          name='transferrina_simple'
          onChagen={onChagen}
          type='number'
          register={register}
        />
      </section>
    </>
  )
}
