import { Input } from '../Input'
import { NegativePositive } from '../NegativePositive'
import { Remarks } from '../Remarks'

export default function GasometriaSanguinea ({
  onChange,
  value,
  values,
  register,
  required
}) {
  return (
    <div className='w-[auto]'>
      <h2>Gasometría Sanguínea</h2>

      <h3>Muestra</h3>

      <NegativePositive
        values={!values?.radio ? value : values.radio}
        n='Arterial'
        p='Venosa'
        name='gasometr_a.radio'
        register={register}
      />

      <h3>Parámetros del Paciente</h3>
      <div className='my-1 flex flex-wrap'>
        <Input
          value={
            !values?.temperatura_corporal ? value : values.temperatura_corporal
          }
          register={register}
          onChange={onChange}
          required={required}
          name='gasometr_a.temperatura_corporal'
          measure='°C'
          type='text'
          placeholder='Temperatura corporal...'
        >
          Temperatura corporal
        </Input>

        <Input
          value={!values?.hb_total ? value : values.hb_total}
          register={register}
          onChange={onChange}
          required={required}
          measure='g/dL'
          name='gasometr_a.hb_total'
          type='text'
          placeholder='Hb total...'
        >
          Hb total:
        </Input>

        <Input
          value={!values?.fio2 ? value : values.fio2}
          name='gasometr_a.fio2'
          register={register}
          onChange={onChange}
          required={required}
          measure='%'
          type='number'
          placeholder='fio2...'
        >
          FIO2:
        </Input>
      </div>
      <h3>Parámetros medidos</h3>
      <div className='my-1 flex flex-wrap'>
        <Input
          value={!values?.ph ? value : values.ph}
          register={register}
          onChange={onChange}
          required={required}
          name='gasometr_a.ph'
          type='number'
          placeholder='pH...'
        >
          pH:
        </Input>

        <Input
          value={!values?.po2 ? value : values.po2}
          register={register}
          onChange={onChange}
          required={required}
          measure='mmHg'
          name='gasometr_a.po2'
          type='text'
          placeholder='PO2...'
        >
          PO2:
        </Input>

        <Input
          value={!values?.pco2 ? value : values.pco2}
          register={register}
          onChange={onChange}
          required={required}
          measure='mmHg'
          name='gasometr_a.pco2'
          type='text'
          placeholder='pCO2...'
        >
          pCO2:
        </Input>

        <Input
          value={!values?.sodio ? value : values.sodio}
          register={register}
          onChange={onChange}
          required={required}
          measure='mEq/L'
          name='gasometr_a.sodio'
          type='text'
          placeholder='Sodio...'
        >
          Sodio:
        </Input>

        <Input
          value={!values?.potasio ? value : values.potasio}
          register={register}
          onChange={onChange}
          required={required}
          measure='mEq/L'
          name='gasometr_a.potasio'
          type='text'
          placeholder='Potasio...'
        >
          Potasio:
        </Input>

        <Input
          value={!values?.calcio_ionico ? value : values.calcio_ionico}
          register={register}
          onChange={onChange}
          required={required}
          measure='mmol/L'
          name='gasometr_a.calcio_ionico'
          type='text'
          placeholder='Calcio Iónico...'
        >
          Calcio Iónico:
        </Input>
      </div>
      <h3>Parámetros Calculados</h3>
      <div className='my-1 flex flex-wrap'>
        <Input
          value={!values?.hco3 ? value : values.hco3}
          register={register}
          onChange={onChange}
          required={required}
          measure='mM'
          name='gasometr_a.hco3'
          type='text'
          placeholder='HCO3-...'
        >
          HCO3-:
        </Input>

        <Input
          value={!values?.tco2 ? value : values.tco2}
          register={register}
          onChange={onChange}
          required={required}
          measure='mM'
          name='gasometr_a.tco2'
          type='text'
          placeholder='TCO2...'
        >
          TCO2:
        </Input>

        <Input
          value={!values?.beb ? value : values.beb}
          register={register}
          onChange={onChange}
          required={required}
          measure='mM'
          name='gasometr_a.beb'
          type='text'
          placeholder='BEb...'
        >
          BEb:
        </Input>

        <Input
          value={!values?.beect ? value : values.beect}
          register={register}
          onChange={onChange}
          required={required}
          measure='mM'
          name='gasometr_a.beect'
          type='text'
          placeholder='BEect...'
        >
          BEect:
        </Input>

        <Input
          value={!values?.saturacion_o2 ? value : values.saturacion_o2}
          register={register}
          onChange={onChange}
          required={required}
          measure='mM'
          name='gasometr_a.saturacion_o2'
          type='text'
          placeholder='Saturación O2...'
        >
          Saturación O2:
        </Input>
      </div>
      <Remarks
        value={!values?.remarks ? value : values.remarks}
        name='gasometr_a.remarks'
        register={register}
      />
    </div>
  )
}
