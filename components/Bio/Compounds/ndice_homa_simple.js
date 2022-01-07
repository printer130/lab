import { Input } from '../Input'

export default function IndiceHOMA ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>Indice HOMA</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Indice HOMA....'
          name='ndice_homa_simple'
        />
      </section>
    </>
  )
}
