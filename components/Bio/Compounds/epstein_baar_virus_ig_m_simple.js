import { Input } from '../Input'

export default function EpstainBaarVirusIgM ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Epstain Baar Virus - IgM</h3>
        <Input
          pdf={pdf}
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
