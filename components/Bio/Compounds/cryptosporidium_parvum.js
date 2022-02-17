// cryptosporidium
import { NegativePositive } from '../NegativePositive'

export default function CryptosporidiumParvum ({
  values,
  register,
  value,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Cryptosporidium Parvum</h3>
        <NegativePositive
          pdf={pdf}
          values={values}
          register={register}
          name='cryptosporidium_parvum'
        />
      </section>
    </>
  )
}
