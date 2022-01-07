// cryptosporidium
import { NegativePositive } from '../NegativePositive'

export default function CryptosporidiumParvum ({
  values,
  register,
  value
}) {
  return (
    <>
      <section>
        <h2>Cryptosporidium Parvum</h2>
        <NegativePositive
          values={values}
          register={register}
          name='cryptosporidium_parvum'
        />
      </section>
    </>
  )
}
