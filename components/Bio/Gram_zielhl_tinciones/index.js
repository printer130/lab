import { Input } from 'components/Bio/Input'

export function GramZielhlTinciones ({
  values,
  onChange,
  register,
  value,
  name,
  pdf
}) {
  return (
    <>
      <Input
        pdf={pdf}
        value={!values?.tincion_de_gram ? value : values.tincion_de_gram}
        register={register}
        onChange={onChange}
        name={`${name}.tincion_de_gram`}
        placeholder='Tincion de Gram...'
        type='text'
      >
        Tincion de Gram:
      </Input>

      <Input
        pdf={pdf}
        value={!values?.tincion_de_zielhl ? value : values.tincion_de_zielhl}
        register={register}
        onChange={onChange}
        name={`${name}.tincion_de_zielhl`}
        placeholder='Tincion de Ziehl Neesen...'
        type='text'
      >
        Tincion de Ziehl Neesen:
      </Input>

      <Input
        pdf={pdf}
        value={!values?.otras_tinciones ? value : values.otras_tinciones}
        register={register}
        onChange={onChange}
        name={`${name}.otras_tinciones`}
        placeholder='Otras Tinciones...'
        type='text'
      >
        Otras Tinciones:
      </Input>
    </>
  )
}
