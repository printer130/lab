import { Input } from '../Input'

export default function Ada ({ onChange, value, pdf, register, required, values }) {
  return (
    <>
      <h2>ADA</h2>
      <section className='section'>
        <Input
          pdf={pdf}
          value={!values ? value : values.ada_de_liquido_cefalorraquideo}
          register={register}
          onChange={onChange}
          required={required}
          name='ada_de_liquido_cefalorraquideo'
          measure='U/L'
          type='number'
          placeholder='Ada de liquido cefalorraquideo...'
        >
          ADA de Líquido Cefalorraquideo:
        </Input>

        <Input
          pdf={pdf}
          value={!values ? value : values.ada_de_liquido_pleural}
          register={register}
          onChange={onChange}
          required={required}
          name='ada_de_liquido_pleural'
          measure='U/L'
          type='number'
          placeholder='Ada de líquido pleural...'
        >
          ADA de Líquido Pleural:
        </Input>

        <Input
          pdf={pdf}
          value={!values ? value : values.ada_de_liquido_ascitico}
          register={register}
          onChange={onChange}
          required={required}
          name='ada_de_liquido_ascitico'
          measure='U/L'
          type='number'
          placeholder='Ada de líquido ascítico...'
        >
          ADA de Líquido Ascítico:
        </Input>

        <Input
          pdf={pdf}
          value={!values ? value : values.ada_de_liquido_peritoneal}
          register={register}
          onChange={onChange}
          required={required}
          name='ada_de_liquido_peritoneal'
          measure='U/L'
          type='number'
          placeholder='Ada de liquido peritoneal...'
        >
          ADA de Líquido Peritoneal:
        </Input>

        <Input
          pdf={pdf}
          value={!values ? value : values.ada_de_liquido}
          register={register}
          onChange={onChange}
          required={required}
          name='ada_de_liquido'
          measure='U/L'
          type='number'
          placeholder='Ada de liquido...'
        >
          ADA de Líquido:
        </Input>

        <Input
          pdf={pdf}
          value={!values ? value : values.ada_de_liquido_sinovial}
          register={register}
          onChange={onChange}
          required={required}
          name='ada_de_liquido_sinovial'
          measure='U/L'
          type='number'
          placeholder='Ada de Sinovial...'
        >
          ADA de Líquido Sinovial:
        </Input>

        <Input
          pdf={pdf}
          value={!values ? value : values.ada_de_liquido_pericardico}
          register={register}
          onChange={onChange}
          required={required}
          name='ada_de_liquido_pericardico'
          measure='U/L'
          type='number'
          placeholder='Ada de Pericárdico...'
        >
          ADA de Líquido Pericárdico:
        </Input>

        <Input
          pdf={pdf}
          value={!values ? value : values.ada_de_liquido_suero}
          register={register}
          onChange={onChange}
          required={required}
          name='ada_de_liquido_suero'
          measure='U/L'
          type='number'
          placeholder='Ada en suero...'
        >
          ADA en Suero:
        </Input>
      </section>
    </>
  )
}
