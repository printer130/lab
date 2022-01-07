import { Input } from '../Input'

export default function IndiceDeTiroxinaLibre ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Indice de Tiroxina Libre</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Indice de Tiroxina Libre....'
          name='ndice_de_tiroxina_libre_simple'
        />
      </section>
    </>
  )
}
