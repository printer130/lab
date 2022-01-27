import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function GeneralDeOrina ({
  onChange,
  value,
  values,
  register,
  required
}) {
  return (
    <>
      <h2>General de Orina</h2>
      <h3>Examen Físico</h3>
      <section className='section'>
        <Input
          value={!values?.olor ? value : values.olor}
          name='general_de_orina.olor'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Olor...'
        >
          Olor:
        </Input>

        <Input
          value={!values?.color ? value : values.color}
          name='general_de_orina.color'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Color...'
        >
          Color:
        </Input>

        <Input
          value={!values?.aspecto ? value : values.aspecto}
          name='general_de_orina.aspecto'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Aspecto...'
        >
          Aspecto:
        </Input>

        <Input
          value={!values?.densidad ? value : values.densidad}
          name='general_de_orina.densidad'
          register={register}
          onChange={onChange}
          type='number'
          placeholder='Densidad...'
        >
          Densidad:
        </Input>

        <Input
          value={!values?.ph ? value : values.ph}
          name='general_de_orina.ph'
          register={register}
          onChange={onChange}
          type='number'
          placeholder='pH...'
        >
          pH:
        </Input>
      </section>

      <h3>Examen Químico</h3>
      <section className='section'>
        <Input
          value={!values?.proteinas ? value : values.proteinas}
          name='general_de_orina.proteinas'
          register={register}
          measure='mg/dL'
          onChange={onChange}
          type='number'
          placeholder='Proteinas...'
        >
          Proteinas:
        </Input>

        <Input
          value={!values?.cuerpo_cetonicos ? value : values.cuerpo_cetonicos}
          name='general_de_orina.cuerpo_cetonicos'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Cuerpos Cetónicos...'
        >
          Cuerpos Cetónicos:
        </Input>

        <Input
          value={!values?.sales_biliares ? value : values.sales_biliares}
          name='general_de_orina.sales_biliares'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Sales Biliares...'
        >
          Sales Biliares:
        </Input>

        <Input
          value={!values?.hemoglobina ? value : values.hemoglobina}
          name='general_de_orina.hemoglobina'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Hemoglobina...'
        >
          Hemoglobina:
        </Input>

        <Input
          value={!values?.urobilina ? value : values.urobilina}
          name='general_de_orina.urobilina'
          register={register}
          onChange={onChange}
          type='number'
          measure='U.E.'
          placeholder='Urobilina...'
        >
          Urobilina:
        </Input>

        <Input
          value={!values?.nitritos ? value : values.nitritos}
          name='general_de_orina.nitritos'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Nitritos...'
        >
          Nitritos:
        </Input>

        <Input
          value={!values?.glucosa ? value : values.glucosa}
          name='general_de_orina.glucosa'
          register={register}
          onChange={onChange}
          measure='mg/dL'
          type='number'
          placeholder='Glucosa...'
        >
          Glucosa:
        </Input>

        <Input
          value={!values?.bilirrubinas ? value : values.bilirrubinas}
          name='general_de_orina.bilirrubinas'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Bilirrubinas...'
        >
          Bilirrubinas:
        </Input>
      </section>

      <h3>Examen Microscópico</h3>
      <section className='section'>
        <Input
          value={!values?.leucocitos ? value : values.leucocitos}
          name='general_de_orina.leucocitos'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Leucocitos...'
        >
          Leucocitos:
        </Input>

        <Input
          value={!values?.hematies ? value : values.hematies}
          name='general_de_orina.hematies'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Hematies...'
        >
          Hematies:
        </Input>

        <Input
          value={
            !values?.celulas_descamadas ? value : values.celulas_descamadas
          }
          name='general_de_orina.celulas_descamadas'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Celulas Descamadas...'
        >
          Celulas Descamadas:
        </Input>

        <Input
          value={!values?.flora_microbiana ? value : values.flora_microbiana}
          name='general_de_orina.flora_microbiana'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Flora Microbiana...'
        >
          Flora Microbiana:
        </Input>

        <Input
          value={!values?.piocitos ? value : values.piocitos}
          name='general_de_orina.piocitos'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Piocitos...'
        >
          Piocitos:
        </Input>

        <Input
          value={!values?.cilindros ? value : values.cilindros}
          name='general_de_orina.cilindros'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Cilindros...'
        >
          Cilindros:
        </Input>

        <Input
          value={!values?.celulas_renales ? value : values.celulas_renales}
          name='general_de_orina.celulas_renales'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Celulas Renales...'
        >
          Celulas Renales:
        </Input>

        <Input
          value={!values?.cristales ? value : values.cristales}
          name='general_de_orina.cristales'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Cristales...'
        >
          Cristales:
        </Input>

        <Input
          value={!values?.levaduras ? value : values.levaduras}
          name='general_de_orina.levaduras'
          register={register}
          onChange={onChange}
          type='text'
          placeholder='Levaduras...'
        >
          Levaduras:
        </Input>
      </section>

      <Remarks
        value={!values?.remarks ? value : values.remarks}
        name='general_de_orina.remarks'
        register={register}
      />
    </>
  )
}
