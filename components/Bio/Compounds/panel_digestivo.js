import { Select } from '../Select'

export default function PanelDigestivo ({ values, register, pdf }) {
  return (
    <>
      <h2>Panel Digestivo</h2>
      <section className='section'>
        <label>
          <span>ASCA IgA (Saccharomyces cerevesiae): </span>
          <Select
            pdf={pdf}
            register={register}
            values={values?.asca_ig_a}
            name='panel_digestivo.asca_ig_a'
          />
        </label>

        <label>
          <span>Anti Transglutaminasa IgA: </span>
          <Select
            pdf={pdf}
            register={register}
            values={values?.anti_transglutaminasa_ig_a}
            name='panel_digestivo.anti_transglutaminasa_ig_a'
          />
        </label>

        <label>
          <span>Anti Gliadina IgA: </span>
          <Select
            pdf={pdf}
            register={register}
            values={values?.anti_gliadina_ig_a}
            name='panel_digestivo.anti_gliadina_ig_a'
          />
        </label>

        <label>
          <span>Anti Factor Intrinseco IgA: </span>
          <Select
            pdf={pdf}
            register={register}
            values={values?.anti_factor_intrinseco_ig_a}
            name='panel_digestivo.anti_factor_intrinseco_ig_a'
          />
        </label>

        <label>
          <span>Anti Endomisio IgA: </span>
          <Select
            pdf={pdf}
            register={register}
            values={values?.anti_endomisio_ig_a}
            name='panel_digestivo.anti_endomisio_ig_a'
          />
        </label>

        <label>
          <span>Anti Células Parietales IgA: </span>
          <Select
            pdf={pdf}
            register={register}
            values={values?.anti_celulas_parientales_ig_a}
            name='panel_digestivo.anti_celulas_parientales_ig_a'
          />
        </label>
      </section>

      <style jsx>
        {`
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
