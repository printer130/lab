import { Input } from '../Input'

export default function HCGBetaLibre ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>HCG Beta Libre</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='HCG Beta Libre...'
          name='hcg_beta_libre_simple'
        />
      </section>
    </>
  )
}
