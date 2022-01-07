import { Input } from '../Input'

export default function OHProgesterona17 ({
  values,
  value,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>17-OH Progesterona</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='17-OH Progesterona....'
          name='17_oh_progesterona_simple'
        />
      </section>
    </>
  )
}
