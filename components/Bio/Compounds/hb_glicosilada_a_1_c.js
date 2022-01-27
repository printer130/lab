import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function HemoglobinaGlicosiladaA1C ({
  onChange,
  value,
  values,
  register
}) {
  return (
    <>
      <h2>Hemoglobina Glicosilada A1C</h2>
      <Input
        value={!values?.hemoglobina ? value : values.hemoglobina}
        register={register}
        onChange={onChange}
        name='hb_glicosilada_a_1_c.hemoglobina'
        type='number'
        measure='%'
        placeholder='Hemoglobina Glicosilada A1C...'
      />
      <Remarks
        value={!values?.remarks ? value : values.remarks}
        register={register}
        name='hb_glicosilada_a_1_c.hemoglobina'
      />
    </>
  )
}
