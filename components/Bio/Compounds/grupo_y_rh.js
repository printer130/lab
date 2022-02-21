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
      <h2 className='text-sm'>Grupo y RH</h2>
      <h3>Grupo</h3>
      {
      values?.grupo
        ? <p>{values.grupo}</p>
        : <section>
          <Input
            pdf={pdf}
            value='A'
            name='grupo_y_rh.grupo'
            register={register}
            onChange={onChange}
            type='radio'
          >
            A
          </Input>
          <Input
            pdf={pdf}
            value='B'
            name='grupo_y_rh.grupo'
            register={register}
            onChange={onChange}
            type='radio'
          >
            B
          </Input>
          <Input
            pdf={pdf}
            value='O'
            name='grupo_y_rh.grupo'
            register={register}
            onChange={onChange}
            type='radio'
          >
            O
          </Input>
        </section>
      }

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
          flex-direction: column;
          margin-bottom: 2.2rem;
        }
      `}
      </style>
    </>
  )
}
