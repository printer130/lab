import { Input } from '../Input'

export default function CreatinuriaDe24hrs ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Creatinuria de 24 hrs.</h2>
        <Input
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
