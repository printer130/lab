import { Input } from '../Input'

export default function BHCGCuantitativo ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>BHCG Cuantitativo</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='BHCG Cuantitativo...'
          name='bhcg_cuantitativo_simple'
        />
      </section>
    </>
  )
}
