import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function MocoFecal ({ onChange, value, pdf, values, register }) {
  return (
    <>
      <h2>Moco Fecal</h2>
      <section className='section'>
        <Input
          pdf={pdf}
          register={register}
          onChange={onChange}
          type='text'
          value={!values?.cantidad ? value : values.cantidad}
          name='moco_fecal.cantidad'
          placeholder='Cantidad...'
        >
          Cantidad
        </Input>

        <Input
          pdf={pdf}
          register={register}
          onChange={onChange}
          type='number'
          measure='%'
          placeholder='Polimorfonucleares...'
          value={
            !values?.polimorfonucleares ? value : values.polimorfonucleares
          }
          name='moco_fecal.polimorfonucleares'
        >
          Polimorfonucleares
        </Input>

        <Input
          pdf={pdf}
          register={register}
          onChange={onChange}
          type='number'
          measure='%'
          placeholder='Mononucleares...'
          value={!values?.mononucleares ? value : values.mononucleares}
          name='moco_fecal.mononucleares'
        >
          Mononucleares
        </Input>
      </section>

      <Remarks
        pdf={pdf}
        value={!values?.remarks ? value : values.remarks}
        register={register}
        name='moco_fecal.remarks'
      />
    </>
  )
}
