import { Input } from '../Input'

export default function EpstainBaarVirusIgG ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Epstain Baar Virus - IgG</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Epstain Baar Virus - IgG....'
          name='epstein_baar_virus_ig_g_simple'
        />
      </section>
    </>
  )
}
