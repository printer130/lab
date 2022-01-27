import { Input } from '../Input'

export const Microscopico = ({
  name,
  value,
  register,
  onChange,
  values = null,
  day = ''
}) => {
  return (
    <section className='section'>
      <Input
        value={!values ? value : values?.protozooarios}
        register={register}
        onChange={onChange}
        name={`${name}protozooarios`}
        placeholder='Protozooarios...'
        type='text'
      >
        Protozooarios:
      </Input>

      <Input
        value={!values ? value : values?.vermes}
        register={register}
        onChange={onChange}
        name={`${name}vermes`}
        placeholder='Vermes...'
        type='text'
      >
        Vermes:
      </Input>

      <Input
        value={!values ? value : values?.leucocitos}
        register={register}
        onChange={onChange}
        name={`${name}leucocitos`}
        placeholder='Leucocitos...'
        type='text'
      >
        Leucocitos:
      </Input>

      <Input
        value={!values ? value : values?.eritrocitos}
        register={register}
        onChange={onChange}
        name={`${name}eritrocitos`}
        placeholder='Eritrocitos...'
        type='text'
      >
        Eritrocitos:
      </Input>

      <Input
        value={!values ? value : values?.levaduras}
        register={register}
        onChange={onChange}
        name={`${name}levaduras`}
        placeholder='Levaduras...'
        type='text'
      >
        Levaduras:
      </Input>

      <Input
        value={!values ? value : values?.flora_microbiana}
        register={register}
        onChange={onChange}
        name={`${name}flora_microbiana`}
        placeholder='Flora Microbiana...'
        type='text'
      >
        Flora Microbiana:
      </Input>
    </section>
  )
}
