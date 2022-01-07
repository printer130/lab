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
      <section>
        <h2>Grupo y RH</h2>
        <div>
          <strong>Grupo</strong>
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
        </div>
        <div>
          <strong>Factor RH</strong>
          <NegativePositive
            values={values?.factor_rh}
            register={register}
            name='grupo_y_rh.factor_rh'
          />
        </div>
      </section>
    </>
  )
}
