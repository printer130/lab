import { Input } from '../Input'

export default function BHCGCualitativa ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>BHCG Cualitativa</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='BHCG Cualitativa...'
          name='bhcg_cualitativa_simple'
        />
      </section>
    </>
  )
}
