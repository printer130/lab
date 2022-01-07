import { Input } from '../Input'

export default function Transferrina ({ register, values, value, onChagen }) {
  return (
    <>
      <section>
        <h2>Transferrina</h2>
        <Input
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
