import { Input } from '../Input'

export function NegativePositive ({ values, register, name, n, p }) {
  // console.log(values && values[name] === 'positivo')
  // const isNegativo = values[name] === 'negativo'
  // const isPositivo = values[name] === 'positivo'
  // console.log(values, n, v)
  const isNew = !values & !n & !p
  return (
    <>
      <Input
        checked={values === 'negativo' || values === n || isNew}
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
}
