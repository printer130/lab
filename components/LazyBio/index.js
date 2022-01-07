import { lazy, Suspense } from 'react'

export function LazyBio ({ name, register, values }) {
  const LazyComponent = lazy(() =>
    import(`components/Bio/Compounds/${name}.js`)
  )

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
