import { Input } from '../Input'

export default function DepuracionDeCreatinina ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Depuracion de Creatinina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          type='number'
          register={register}
          placeholder='Depuracion de Creatinina'
          name='depuraci_n_de_creatinina_simple'
        />
      </section>
    </>
  )
}
