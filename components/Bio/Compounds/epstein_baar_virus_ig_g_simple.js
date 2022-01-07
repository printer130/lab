import { Input } from '../Input'

export default function EpstainBaarVirusIgG ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Epstain Baar Virus - IgG</h2>
        <Input
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
