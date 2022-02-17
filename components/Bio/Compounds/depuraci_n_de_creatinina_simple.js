import { Input } from '../Input'

export default function DepuracionDeCreatinina ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <section>
      <h3>Depuracion de Creatinina</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        type='number'
        register={register}
        placeholder='Depuracion de Creatinina'
        name='depuraci_n_de_creatinina_simple'
      />
    </section>
  )
}
