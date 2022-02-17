import { Input } from '../Input'

export default function HCGBetaLibre ({ value, values, pdf, onChange, register }) {
  return (
    <>
      <section>
        <h3>HCG Beta Libre</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='HCG Beta Libre...'
          name='hcg_beta_libre_simple'
        />
      </section>
    </>
  )
}
