/* eslint-disable no-constant-condition */
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

export function LazyBio ({ name, register, values }) {
  if (
    name === 'l_k_m_1' ||
    name === 'asma' ||
    name === 'ama' ||
    name === 'resistencia_osmotica' ||
    // hemograma
    name === 'inv_t_cruzi' ||
    name === 'plasma_rico_en_plaq' ||
    name === 'microm_todo_chagas' ||
    name === 'hlb' ||
    name === 'ac_antivimetina' ||
    name === 'ac_antifosfol_pidos_ig_g' ||
    name === 'anticardiolipina_screening' ||
    name === 'anti_dnp' ||
    name === 'anca_3_line' ||
    name === 'anti_ds_dna_ifi' ||
    name === 'anti_dpg_ig_g'
  ) {
    return <></>
  }
  if (
    // hemostasia
    name === 'dos_factor_intriseco' ||
    name === 'dos_factor_extrinseco' ||
    name === 'factor_xiii' ||
    name === 'anti_factor_xa' ||
    name === 'prueba_de_lazo' ||
    // coprologia
    name === 'oxiuros' ||
    // Ensayo de heces
    name === 'verotoxina_e_coli_0157' ||
    name === 'sudam_iii' ||
    // Alergias
    name === 'respiratorio' ||
    name === 'alimenticio' ||
    name === 'pedi_trico' ||
    // Microbiologia
    name === 'tinci_n_de_gram' ||
    name === 'espermocultivo' ||
    name === 'tinta_china' ||
    // Inmunologia
    name === 'rubeola_ig_m' ||
    name === 'influenza_a_b' ||
    name === 'hidatidosis_western_blot' ||
    // Autoinmunologia
    name === 'c_lulas_le' ||
    name === 'citoqui_lcr' ||
    name === 'citoqui_liq_pleural' ||
    name === 'citoqui_liq_ascitico' ||
    name === 'citoqui_liq_sinovial' ||
    name === 'citoqui_liq_pericardio' ||
    name === 'citoqui_liq_peritoneal' ||
    name === 'amonio_lcr' ||
    // Serologia
    name === 'brucelosis' ||
    // Endocrinologia
    name === 'perfil_metab_lico_neonatal' ||
    name === 'prueba_de_reserva_testicular' ||
    // Medio tiempo
    name === 'osmolaridad_urinaria' ||
    name === 'osmolaridad_plasm_tica' ||
    name === 'oximetr_a'
  ) {
    return <div />
  }

  const LazyComponent = dynamic(
    () => import(`components/Bio/Compounds/${name}.js`),
    {
      ssr: false,
      suspense: false
    }
  )

  return (
    <Suspense fallback='Cargando...'>
      <div className='w-[auto] pr-4 mt-6'>
        <LazyComponent
          register={register}
          name={name}
          values={values}
          required
          />
        </div>
    </Suspense>
  )
}
