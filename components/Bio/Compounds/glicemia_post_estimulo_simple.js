import { Input } from '../Input'

export default function GlicemiaPostEstimulo ({
  value,
  values,
  onChange,
  pdf,
  register
}) {
  return (
    <>
      <section>
        <h3>Glicemia Post Estimulo</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Glicemia Post Estimulo....'
          name='glicemia_post_estimulo_simple'
        />
      </section>
    </>
  )
}
