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
      <section>
        <Input
          checked={values?.a !== null}
          value={!values?.radio.a ? value : values.radio.a}
          name='grupo_y_rh.radio.a'
          register={register}
          onChange={onChange}
          type='radio'
        >
          A
        </Input>
        <Input
          checked={values?.radio.b !== null}
          value={!values?.radio.b ? value : values.radio.b}
          name='grupo_y_rh.radio.b'
          register={register}
          onChange={onChange}
          type='radio'
        >
          B
        </Input>
        <Input
          checked={values?.radio.o !== null}
          value={!values?.radio.o ? value : values.radio.o}
          name='grupo_y_rh.radio.o'
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
