// coproparasitologico_x3

import { FisicoQuimico } from '../Fisico_Quimico'
import { Microscopico } from '../Microscopico'
import { Remarks } from '../Remarks'

export default function Coproparasitologicox3 ({
  onChange,
  value,
  register,
  required,
  values
}) {
  return (
    <>
      <section>
        <h2>Coproparasitologico 1° Dia</h2>
        <h3>Examen Fisico-Quimico</h3>

        <FisicoQuimico
          register={register}
          value={value}
          name='coproparasitol_gico_x3.fisico_quimico.'
          values={values?.fisico_quimico}
          onChange={onChange}
        />

        <h3>Examen Microscópico</h3>
        <Microscopico
          register={register}
          value={value}
          values={values?.microscopico}
          onChange={onChange}
          name='coproparasitol_gico_x3.microscopico.'
        />
        <Remarks
          name='coproparasitol_gico_x3.remarks'
          value={!values?.remarks ? value : values.remarks}
          register={register}
        />

        <h2>Coproparasitologico 2° Dia</h2>
        <h3>Examen Fisico-Quimico</h3>

        <FisicoQuimico
          register={register}
          value={value}
          onChange={onChange}
          values={values?.fisico_quimico2}
          name='coproparasitol_gico_x3.fisico_quimico2.'
        />

        <h3>Examen Microscópico</h3>
        <Microscopico
          register={register}
          value={value}
          values={values?.microscopico2}
          onChange={onChange}
          name='coproparasitol_gico_x3.microscopico2.'
        />

        <Remarks
          name='coproparasitol_gico_x3.remarks2'
          register={register}
          value={!values?.remarks2 ? value : values.remarks2}
        />
        <h2>Coproparasitologico 3° Dia</h2>
        <h3>Examen Fisico-Quimico</h3>
        <FisicoQuimico
          register={register}
          onChange={onChange}
          value={value}
          values={values?.fisico_quimico3}
          name='coproparasitol_gico_x3.fisico_quimico3.'
        />

        <h3>Examen Microscópico</h3>

        <Microscopico
          register={register}
          onChange={onChange}
          value={value}
          values={values?.microscopico3}
          name='coproparasitol_gico_x3.microscopico3.'
        />
        <Remarks
          name='coproparasitol_gico_x3.remarks3'
          register={register}
          value={!values?.remarks3 ? value : values.remarks3}
        />
      </section>
    </>
  )
}
