import { Input } from '../Input'

export default function GlicemiaPostEstimulo ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Glicemia Post Estimulo</h2>
        <Input
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
