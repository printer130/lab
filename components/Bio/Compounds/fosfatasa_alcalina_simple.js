import { Input } from '../Input'
export default function FosfatasaAlcaline ({
  value,
  onChange,
  values,
  register
}) {
  return (
    <>
      <section>
        <h2>Fosfatasa Alcaline</h2>
        <Input
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
