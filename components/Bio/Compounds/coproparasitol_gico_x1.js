// coproparasitologico_x1

import { FisicoQuimico } from '../Fisico_Quimico'
import { Microscopico } from '../Microscopico'
import { Remarks } from '../Remarks'

export default function Coproparasitologico ({
  onChange,
  value,
  values,
  register,
  required
}) {
  return (
    <>
      <section>
        <h2>Coproparasitologico</h2>
        <h3>Examen Fisico-Quimico</h3>
        <FisicoQuimico
          register={register}
          value={value}
          name='coproparasitol_gico_x1.fisico_quimico.'
          values={values?.fisico_quimico}
          onChange={onChange}
        />
        <h3>Examen Microscópico</h3>

        <Microscopico
          register={register}
          value={value}
          values={values?.microscopico}
          onChange={onChange}
          name='coproparasitol_gico_x1.microscopico.'
        />
        <Remarks
          value={!values?.remarks ? value : values.remarks}
          name='coproparasitol_gico_x1.remarks'
          register={register}
        />
      </section>
    </>
  )
}
