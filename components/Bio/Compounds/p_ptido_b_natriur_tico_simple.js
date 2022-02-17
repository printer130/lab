import { Input } from '../Input'

export default function PeptidoBNatriureico ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Peptido B Natriureico</h3>
        <Input
          pdf={pdf}
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
