import { Input } from '../Input'

export default function HGHPostEstimulo ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>HGH Post Estimulo </h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='HGH Post Estimulo....'
          name='hgh_post_estimulo_simple'
        />
      </section>
    </>
  )
}
