import { Input } from '../Input'

export default function BHCGCualitativa ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <section>
      <h3>BHCG Cualitativa</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='BHCG Cualitativa...'
        name='bhcg_cualitativa_simple'
      />
    </section>
  )
}
