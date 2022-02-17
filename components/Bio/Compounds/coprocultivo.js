// coprocultivo

import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function Coprocultivo ({
  onChange,
  value,
  values,
  pdf,
  register,
  required
}) {
  return (
    <>
      <h2>CULTIVO DE SECRECION</h2>

      <h3>Siembra Primaria</h3>
      <Input
        pdf={pdf}
        value={
          !values?.germen_de_identificado
            ? value
            : values.germen_de_identificado
        }
        register={register}
        onChange={onChange}
        name='coprocultivo.germen_de_identificado'
        placeholder='Germen Identificado...'
        type='text'
      >
        Germen Identificado
      </Input>

      <h3>Antibiograma</h3>
      <section className='section'>
        <Input
          pdf={pdf}
          value={
            !values?.antibiograma_levofloxacino
              ? value
              : values.antibiograma_levofloxacino
          }
          register={register}
          onChange={onChange}
          name='coprocultivo.antibiograma_levofloxacino'
          placeholder='levofloxacino...'
          type='text'
        >
          Levofloxacino
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.antibiograma_sulfatrimetoprim
              ? value
              : values.antibiograma_sulfatrimetoprim
          }
          register={register}
          onChange={onChange}
          name='coprocultivo.antibiograma_sulfatrimetoprim'
          placeholder='Sulfatrimetoprim...'
          type='text'
        >
          Sulfatrimetoprim
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.antibiograma_amoxicilina_sulbactam
              ? value
              : values.antibiograma_amoxicilina_sulbactam
          }
          register={register}
          onChange={onChange}
          name='coprocultivo.antibiograma_amoxicilina_sulbactam'
          placeholder='Amoxicilina/Sulbactam...'
          type='text'
        >
          Amoxicilina/Sulbactam
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.antibiograma_cefalexina
              ? value
              : values.antibiograma_cefalexina
          }
          register={register}
          onChange={onChange}
          name='coprocultivo.antibiograma_cefalexina'
          placeholder='Cefalexina...'
          type='text'
        >
          Cefalexina
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.antibiograma_amoxicilina
              ? value
              : values.antibiograma_amoxicilina
          }
          register={register}
          onChange={onChange}
          name='coprocultivo.antibiograma_amoxicilina'
          placeholder='Amoxicilina...'
          type='text'
        >
          Amoxicilina
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.antibiograma_ceftazidima
              ? value
              : values.antibiograma_ceftazidima
          }
          register={register}
          onChange={onChange}
          name='coprocultivo.antibiograma_ceftazidima'
          placeholder='Ceftazidima...'
          type='text'
        >
          Ceftazidima
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.antibiograma_tetraciclina
              ? value
              : values.antibiograma_tetraciclina
          }
          register={register}
          onChange={onChange}
          name='coprocultivo.antibiograma_tetraciclina'
          placeholder='Tetraciclina...'
          type='text'
        >
          Tetraciclina
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.antibiograma_cloranfenicol
              ? value
              : values.antibiograma_cloranfenicol
          }
          register={register}
          onChange={onChange}
          name='coprocultivo.antibiograma_cloranfenicol'
          placeholder='Cloranfenicol...'
          type='text'
        >
          Cloranfenicol
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.antibiograma_Amikazina
              ? value
              : values.antibiograma_Amikazina
          }
          register={register}
          onChange={onChange}
          name='coprocultivo.antibiograma_Amikazina'
          placeholder='Amikazina ...'
          type='text'
        >
          Amikazina
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.antibiograma_ceftriaxona
              ? value
              : values.antibiograma_ceftriaxona
          }
          register={register}
          onChange={onChange}
          name='coprocultivo.antibiograma_ceftriaxona'
          placeholder='Ceftriaxona  ...'
          type='text'
        >
          Ceftriaxona
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.antibiograma_cefotaxina
              ? value
              : values.antibiograma_cefotaxina
          }
          register={register}
          onChange={onChange}
          name='coprocultivo.antibiograma_cefotaxina'
          placeholder='Cefotaxina  ...'
          type='text'
        >
          Cefotaxina
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.antibiograma_ampicilina
              ? value
              : values.antibiograma_ampicilina
          }
          register={register}
          onChange={onChange}
          name='coprocultivo.antibiograma_ampicilina'
          placeholder='Ampicilina  ...'
          type='text'
        >
          Ampicilina
        </Input>
      </section>

      <Remarks
        pdf={pdf}
        value={!values?.remarks ? value : values.remarks}
        register={register}
        name='coprocultivo.remarks'
      />
    </>
  )
}
