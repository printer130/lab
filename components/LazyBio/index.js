import { lazy, Suspense } from 'react'

export function LazyBio ({ name, register, values }) {
  if (
    name === 'l_k_m_1' ||
    name === 'asma' ||
    name === 'ama' ||
    name === 'resistencia_osmotica'
  ) {
    return <div>{name}</div>
  }
  const LazyComponent = lazy(() =>
    import(`components/Bio/Compounds/${name}.js`)
  )

  if (!LazyComponent) return <div>{name}</div>

  return (
    <>
      <Suspense fallback='Cargando...'>
        <LazyComponent
          register={register}
          name={name}
          values={values}
          required
        />
      </Suspense>
    </>
  )
}
