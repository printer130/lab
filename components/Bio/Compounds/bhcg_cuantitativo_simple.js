import { Input } from '../Input'

export default function BHCGCuantitativo ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <section>
      <h3>BHCG Cuantitativo</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='BHCG Cuantitativo...'
        name='bhcg_cuantitativo_simple'
      />
    </section>
  )
}
