import { Input } from '../Input'
export default function FosfatasaAlcaline ({
  value,
  onChange,
  values,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Fosfatasa Alcaline</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Fosfatasa Alcaline....'
          name='fosfatasa_alcalina_simple'
        />
      </section>
    </>
  )
}
