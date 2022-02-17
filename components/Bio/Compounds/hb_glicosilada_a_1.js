import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function HemoglobinaGlicosilada1 ({
  onChange,
  value,
  values,
  register,
  pdf
}) {
  return (
    <>
      <h2>Hemoglobina Glicosilada 1</h2>
      <Input
        value={!values?.hemoglobina ? value : values.hemoglobina}
        register={register}
        pdf={pdf}
        onChange={onChange}
        name='hb_glicosilada_a_1.hemoglobina'
        type='number'
        measure='%'
        placeholder='hemoglobina_glicosilada_1...'
      >
        Hemoglobina Glicosilada 1
      </Input>
      <Remarks
        pdf={pdf}
        value={!values?.remarks ? value : values.remarks}
        register={register}
        name='hb_glicosilada_a_1.remarks'
      />
    </>
  )
}
