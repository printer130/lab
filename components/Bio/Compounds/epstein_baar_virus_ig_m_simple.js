import { Input } from '../Input'

export default function EpstainBaarVirusIgM ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Epstain Baar Virus - IgM</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Epstain Baar Virus - IgM....'
          name='epstein_baar_virus_ig_m_simple'
        />
      </section>
    </>
  )
}
