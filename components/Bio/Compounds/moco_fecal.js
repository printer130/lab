import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function MocoFecal ({ onChange, value, values, register }) {
  return (
    <>
      <h2>Moco Fecal</h2>
      <section className='section'>
        <Input
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
        value={!values?.remarks ? value : values.remarks}
        register={register}
        name='moco_fecal.remarks'
      />
    </>
  )
}
