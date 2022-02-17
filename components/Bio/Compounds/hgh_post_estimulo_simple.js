import { Input } from '../Input'

export default function HGHPostEstimulo ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>HGH Post Estimulo </h3>
        <Input
          pdf={pdf}
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
