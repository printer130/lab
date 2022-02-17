import { Input } from '../Input'
import { NegativePositive } from '../NegativePositive'

export default function GrupoYRh ({
  onChange,
  value,
  register,
  required,
  pdf,
  values
}) {
  return (
    <>
      <h2>Grupo y RH</h2>
      <h3>Grupo</h3>
      <section>
        <Input
          pdf={pdf}
          checked={values?.a !== null}
          value={!values?.a ? value : values.a}
          name='grupo_y_rh.a'
          register={register}
          onChange={onChange}
          type='radio'
        >
          A
        </Input>
        <Input
          pdf={pdf}
          checked={values?.b !== null}
          value={!values?.b ? value : values.b}
          name='grupo_y_rh.b'
          register={register}
          onChange={onChange}
          type='radio'
        >
          B
        </Input>
        <Input
          pdf={pdf}
          checked={values?.o !== null}
          value={!values?.o ? value : values.o}
          name='grupo_y_rh.o'
          register={register}
          onChange={onChange}
          type='radio'
        >
          O
        </Input>
      </section>
      <h3>Factor RH</h3>
      <NegativePositive
        pdf={pdf}
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
