import { Input } from '../Input'

export default function BHCGCuantitativa ({
  values,
  value,
  onChange,
  register,
  pdf
}) {
  return (
    <section>
      <h3>BHCG Cuantitativa</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='BHCG Cuantitativa...'
        name='bhcg_cuantitativa_simple'
      />
    </section>
  )
}
