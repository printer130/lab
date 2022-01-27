import { Input } from '../Input'

export function NegativePositive ({
  values,
  register,
  name,
  n,
  p,
  checked,
  pdf
}) {
  const isNew = !values
  const isNewCustom = isNew & !p & !n
  console.log('isNewCustom', isNewCustom)
  return (
    <section className='section'>
      {!pdf
        ? (
          <>
            <Input
              checked={
              values === 'negativo' ||
              values === n ||
              isNew ||
              !isNewCustom & checked
            }
              value={!n ? 'negativo' : n}
              register={register}
              name={name}
              type='radio'
            >
              {!n ? 'Negativo' : n}
            </Input>
            <Input
              checked={values === 'positivo' || values === p || isNew}
              value={!p ? 'positivo' : p}
              register={register}
              name={name}
              type='radio'
            >
              {!p ? 'Positivo' : p}
            </Input>
          </>
          )
        : (
            values
          )}
      <style jsx>
        {`
          section {
            display: flex;
            width: auto;
            flex-wrap: wrap;
          }
        `}
      </style>
    </section>
  )
}
