import { Input } from '../Input'

export default function IndiceDeTiroxinaLibre ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Indice de Tiroxina Libre</h3>
        <Input
          pdf={pdf}
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
