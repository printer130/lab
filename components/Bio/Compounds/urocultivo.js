import { Input } from '../Input'
import { Remarks } from '../Remarks'
import biogramaJsonUrocultivo from 'const/antibiograma_cultivo.json'

export default function Urocultivo ({ register, onChange, value, values }) {
  const antibio = values?.biograma ?? false
  console.log('antibio', antibio)
  return (
    <>
      <h2>Examen del Sedimiento</h2>

      <Input
        value={!values?.leucocitos ? value : values.leucocitos}
        name='urocultivo.leucocitos'
        onChange={onChange}
        register={register}
        type='text'
        placeholder='Leucocitos...'
      >
        Leucocitos
      </Input>

      <Input
        value={!values?.piocitos ? value : values.piocitos}
        name='urocultivo.piocitos'
        onChange={onChange}
        register={register}
        type='text'
        placeholder='Piocitos...'
      >
        Piocitos
      </Input>

      <Input
        value={!values?.eritrocitos ? value : values.eritrocitos}
        name='urocultivo.eritrocitos'
        onChange={onChange}
        register={register}
        type='text'
        placeholder='Eritrocitos...'
      >
        Eritrocitos
      </Input>

      <Input
        value={!values?.celulas_descamadas ? value : values.celulas_descamadas}
        name='urocultivo.celulas_descamadas'
        onChange={onChange}
        register={register}
        type='text'
        placeholder='Celulas Descamadas...'
      >
        Celulas Descamadas
      </Input>

      <Input
        value={!values?.celulas_redondas ? value : values.celulas_redondas}
        name='urocultivo.celulas_redondas'
        onChange={onChange}
        register={register}
        type='text'
        placeholder='Celulas Redondas...'
      >
        Celulas Redondas
      </Input>

      <Input
        value={!values?.celulas_renales ? value : values.celulas_renales}
        name='urocultivo.celulas_renales'
        onChange={onChange}
        register={register}
        type='text'
        placeholder='Celulas Renales...'
      >
        Celulas Renales
      </Input>

      <Input
        value={!values?.flora_microbiana ? value : values.flora_microbiana}
        name='urocultivo.flora_microbiana'
        onChange={onChange}
        register={register}
        type='text'
        placeholder='Flora Microbiana...'
      >
        Flora Microbiana
      </Input>

      <Input
        value={!values?.levaduras ? value : values.levaduras}
        name='urocultivo.levaduras'
        onChange={onChange}
        register={register}
        type='text'
        placeholder='Levaduras...'
      >
        Levaduras
      </Input>

      <Input
        value={!values?.cristales ? value : values.cristales}
        name='urocultivo.cristales'
        onChange={onChange}
        register={register}
        type='text'
        placeholder='Cristales...'
      >
        Cristales
      </Input>
      <Remarks
        value={!values?.remarks ? value : values.remarks}
        register={register}
        name='urocultivo.remarks'
      />

      <h3>Identificación del Germen</h3>
      <Input
        value={
          !values?.recuento_de_colonias ? value : values.recuento_de_colonias
        }
        name='urocultivo.recuento_de_colonias'
        register={register}
        onChange={onChange}
        measure='UFC/mL'
        placeholder='Recuento de colonias...'
        type='number'
      >
        Recuento de colonias:
      </Input>

      <Input
        value={!values?.germen ? value : values.germen}
        name='urocultivo.germen'
        register={register}
        onChange={onChange}
        placeholder='Germen...'
        type='text'
      >
        Germen:
      </Input>

      {biogramaJsonUrocultivo.map(({ name, type, map }) => {
        return (
          <Input
            value={!antibio ? value : antibio[map]}
            name={`urocultivo.biograma.${map}`}
            key={map}
            type={type}
            onChange={onChange}
            register={register}
            placeholder={name}
          >
            {name}
          </Input>
        )
      })}

      <Remarks
        register={register}
        value={!values?.remarks2 ? value : values.remarks2}
        name='urocultivo.remarks2'
      />
    </>
  )
}
