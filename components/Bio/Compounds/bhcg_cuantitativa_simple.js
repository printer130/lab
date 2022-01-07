import { Input } from '../Input'

export default function BHCGCuantitativa ({
  values,
  value,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>BHCG Cuantitativa</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='BHCG Cuantitativa...'
          name='bhcg_cuantitativa_simple'
        />
      </section>
    </>
  )
}
