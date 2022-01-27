import { Input } from '../Input'
import { NegativePositive } from '../NegativePositive'

export default function GrupoYRh ({
  onChange,
  value,
  register,
  required,
  values
}) {
  return (
    <>
      <h2>Grupo y RH</h2>
      <strong>Grupo</strong>
      <section>
        <Input
          checked={values?.a !== null}
          value={!values?.a ? value : values.a}
          name='grupo_y_rh.radio'
          register={register}
          onChange={onChange}
          type='radio'
        >
          A
        </Input>
        <Input
          checked={values?.b !== null}
          value={!values?.b ? value : values.b}
          name='grupo_y_rh.radio'
          register={register}
          onChange={onChange}
          type='radio'
        >
          B
        </Input>
        <Input
          checked={values?.o !== null}
          value={!values?.o ? value : values.o}
          name='grupo_y_rh.radio'
          register={register}
          onChange={onChange}
          type='radio'
        >
          O
        </Input>
      </section>
      <strong>Factor RH</strong>
      <NegativePositive
        values={values?.factor_rh}
        register={register}
        name='grupo_y_rh.factor_rh'
      />
      <style jsx>{`
        section {
          display: flex;
          width: 220px;
          justify-content: space-between;
          margin-bottom: 2.2rem;
        }
      `}
      </style>
    </>
  )
}
