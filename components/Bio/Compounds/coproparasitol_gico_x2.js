// coproparasitologico_x2

import { FisicoQuimico } from '../Fisico_Quimico'
import { Microscopico } from '../Microscopico'
import { Remarks } from '../Remarks'

export default function Coproparasitologicox2 ({
  onChange,
  value,
  register,
  required,
  pdf,
  values
}) {
  return (
    <>
      <section>
        <h2>Coproparasitologico 1° Dia</h2>
        <h3>Examen Fisico-Quimico</h3>
        <FisicoQuimico
          pdf={pdf}
          register={register}
          value={value}
          name='coproparasitol_gico_x2.fisico_quimico.'
          values={values?.fisico_quimico}
          onChange={onChange}
        />

        <h3>Examen Microscópico</h3>
        <Microscopico
          pdf={pdf}
          register={register}
          value={value}
          values={values?.microscopico}
          onChange={onChange}
          name='coproparasitol_gico_x2.microscopico.'
        />

        <Remarks
          pdf={pdf}
          value={!values?.remarks ? value : values.remarks}
          name='coproparasitol_gico_x2.remarks'
          register={register}
        />

        <h2>Coproparasitologico 2° Dia</h2>
        <h3>Examen Fisico-Quimico</h3>
        <FisicoQuimico
          pdf={pdf}
          register={register}
          values={values?.fisico_quimico2}
          value={value}
          name='coproparasitol_gico_x2.fisico_quimico2.'
          onChange={onChange}
        />

        <h3>Examen Microscópico</h3>
        <Microscopico
          pdf={pdf}
          register={register}
          value={value}
          values={values?.microscopico2}
          onChange={onChange}
          name='coproparasitol_gico_x2.microscopico2.'
        />

        <Remarks
          pdf={pdf}
          name='coproparasitol_gico_x2.remarks2'
          value={!values?.remarks2 ? value : values.remarks2}
          register={register}
        />
      </section>
    </>
  )
}
