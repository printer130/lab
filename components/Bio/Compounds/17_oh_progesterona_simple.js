import { Input } from '../Input'

export default function OHProgesterona17 ({
  values,
  value,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>17-OH PROGESTERONA</h3>
        <Input
          pdf={pdf}
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
