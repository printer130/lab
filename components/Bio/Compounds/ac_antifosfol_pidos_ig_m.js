import { Input } from '../Input'

export default function AnticuerpoAntifosfolipidosIgM ({
  onChange,
  value,
  register,
  required,
  values
}) {
  return (
    <>
      <h2>Anticuerpo Antifosfolípidos - IgM</h2>
      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        name='ac_antifosfol_pidos_ig_m'
        measure='MPL'
        type='number'
        placeholder='Anticuerpo Antifosfolípidos - IgM'
      >
        Anticuerpo Antifosfolípidos - IgM
      </Input>
    </>
  )
}
