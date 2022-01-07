import { Input } from '../Input'

export default function PeptidoBNatriureico ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Peptido B Natriureico</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Peptido B Natriureico....'
          name='p_ptido_b_natriur_tico_simple'
        />
      </section>
    </>
  )
}
