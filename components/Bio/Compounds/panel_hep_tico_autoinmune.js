import { Select } from '../Select'

export default function PanelHepaticoAutoinmune ({ register, pdf, values, value }) {
  return (
    <>
      <h2>Panel Hepático Autoinmune</h2>
      <section className='section'>
        <label>
          <span>AntiSp-100: </span>
          <Select
            pdf={pdf}
            register={register}
            values={values?.anti_sp_100}
            name='panel_hep_tico_autoinmune.anti_sp_100'
          />
        </label>

        <label>
          <span>Anti SLA/LP: </span>
          <Select
            pdf={pdf}
            register={register}
            values={values?.anti_sla_lp}
            name='panel_hep_tico_autoinmune.anti_sla_lp'
          />
        </label>

        <label>
          <span>Tropomiosina (ASMAT): </span>
          <Select
            pdf={pdf}
            register={register}
            values={values?.tropomiosina}
            name='panel_hep_tico_autoinmune.tropomiosina'
          />
        </label>

        <label>
          <span>Anti LKM: </span>
          <Select
            pdf={pdf}
            register={register}
            values={values?.anti_lkm}
            name='panel_hep_tico_autoinmune.anti_lkm'
          />
        </label>

        <label>
          <span>Anti Lc1: </span>
          <Select
            pdf={pdf}
            register={register}
            values={values?.anti_l_c1}
            name='panel_hep_tico_autoinmune.anti_l_c1'
          />
        </label>

        <label>
          <span>Anti gp-210: </span>
          <Select
            pdf={pdf}
            register={register}
            values={values?.anti_gp_210}
            name='panel_hep_tico_autoinmune.anti_gp_210'
          />
        </label>

        <label>
          <span>F-Actina (ASMA): </span>
          <Select
            pdf={pdf}
            register={register}
            values={values?.f_actina_asma}
            name='panel_hep_tico_autoinmune.f_actina_asma'
          />
        </label>

        <label>
          <span>Actinin (ASMA): </span>
          <Select
            pdf={pdf}
            register={register}
            values={values?.actinin}
            name='panel_hep_tico_autoinmune.actinin'
          />
        </label>

        <label>
          <span>AMA-M2: </span>
          <Select
            pdf={pdf}
            values={!values?.remarks ? value : values.remarks}
            register={register}
            name='panel_hep_tico_autoinmune.remarks'
          />
        </label>
      </section>
      <style jsx>{`
        label {
          padding: 0.65rem 0;
          width: 270px;
          display: flex;
          flex-direction: column;
        }
      `}
      </style>
    </>
  )
}
