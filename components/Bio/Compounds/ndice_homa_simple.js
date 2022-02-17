import { Input } from '../Input'

export default function IndiceHOMA ({ value, pdf, onChange, values, register }) {
  return (
    <>
      <section>
        <h3>Indice HOMA</h3>
        <Input
          pdf={pdf}
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
