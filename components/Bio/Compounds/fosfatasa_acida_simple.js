import { Input } from '../Input'
export default function FosfatasaAcida ({ value, pdf, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>Fosfatasa Acida</h2>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Fosfatasa Acida....'
          name='fosfatasa_acida_simple'
        />
      </section>
    </>
  )
}
