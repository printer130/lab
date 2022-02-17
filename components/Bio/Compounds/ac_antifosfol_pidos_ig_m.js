import { Input } from '../Input'

export default function AnticuerpoAntifosfolipidosIgM ({
  onChange,
  value,
  register,
  required,
  pdf,
  values
}) {
  return (
    <>
      <h3>Anticuerpo Antifosfolípidos - IgM</h3>
      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        pdf={pdf}
        required={required}
        name='ac_antifosfol_pidos_ig_m'
        measure='MPL'
        type='number'
        placeholder='Anticuerpo Antifosfolípidos - IgM'
      />
    </>
  )
}
