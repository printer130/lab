import { NegativePositive } from '../NegativePositive'

export default function InhibidorLupidico ({
  onChange,
  value,
  values,
  register
}) {
  return (
    <>
      <h2>Inhibidor Lúpidico</h2>

      <strong>dVVRT (Veneno de Russell): </strong>
      <NegativePositive
        values={values}
        register={register}
        name='inhibidor_l_pidico.dvvrt'
      />

      <strong>dPT: </strong>
      <NegativePositive
        values={values}
        register={register}
        name='inhibidor_l_pidico.dpt'
      />

      <strong>aPTT Sensible: </strong>
      <NegativePositive
        values={values}
        register={register}
        name='inhibidor_l_pidico.aptt'
      />
    </>
  )
}
