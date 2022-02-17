import { Input } from '../Input'

export default function CreatinuriaDe24hrs ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Creatinuria de 24 hrs.</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Creatinuria de 24 hrs....'
          name='creatinuria_de_24_hrs_simple'
        />
      </section>
    </>
  )
}
