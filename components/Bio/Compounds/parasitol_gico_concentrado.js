import { FisicoQuimico } from '../Fisico_Quimico'
import { Microscopico } from '../Microscopico'

export default function ParasitologicoConcentrado ({
  register,
  value,
  onChange,
  name,
  values = null
}) {
  return (
    <>
      <h2>Parasitológico Concentrado</h2>
      <h3>Examen Fisico-Quimico</h3>

      <FisicoQuimico
        register={register}
        name='parasitol_gico_concentrado.fisico_quimico.'
        value={value}
        values={values?.fisico_quimico}
        onChange={onChange}
      />

      <h3>Examen Microscópico</h3>
      <Microscopico
        onChange={onChange}
        value={value}
        values={values?.microscopico}
        register={register}
        name='parasitol_gico_concentrado.microscopico.'
      />
    </>
  )
}
