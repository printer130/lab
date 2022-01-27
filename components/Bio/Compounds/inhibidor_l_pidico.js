import { NegativePositive } from '../NegativePositive'

export default function InhibidorLupidico ({
  onChange,
  value,
  values,
  pdf,
  register
}) {
  return (
    <>
      <h2>Inhibidor Lúpidico</h2>

      <p>
        <strong>DVVRT (Veneno de Russell): </strong>
      </p>
      <NegativePositive
        pdf={pdf}
        values={!values?.dvvrt ? values : values.dvvrt}
        register={register}
        name='inhibidor_l_pidico.dvvrt'
      />
      <p>
        <strong>dPT: </strong>
      </p>
      <NegativePositive
        pdf={pdf}
        values={!values?.dpt ? values : values.dpt}
        register={register}
        name='inhibidor_l_pidico.dpt'
      />
      <p>
        <strong>aPTT Sensible: </strong>
      </p>
      <NegativePositive
        pdf={pdf}
        values={!values?.aptt ? values : values.aptt}
        register={register}
        name='inhibidor_l_pidico.aptt'
      />
    </>
  )
}
