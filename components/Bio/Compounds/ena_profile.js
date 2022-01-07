import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function EnaProfile ({ onChange, register, value, values }) {
  return (
    <>
      <section>
        <h2>Ena Profile</h2>
        <Input
          value={!values?.d_ss_b_la ? value : values.d_ss_b_la}
          register={register}
          onChange={onChange}
          name='ena_profile.d_ss_b_la'
          placeholder='SS-B/La...'
          type='number'
        >
          D-SS-B/La:
        </Input>

        <Input
          value={!values?.sm ? value : values.sm}
          register={register}
          onChange={onChange}
          name='ena_profile.sm'
          placeholder='Sm...'
          type='number'
        >
          Sm:
        </Input>

        <Input
          value={!values?.scl_70 ? value : values.scl_70}
          register={register}
          onChange={onChange}
          name='ena_profile.scl_70'
          placeholder='Scl-70...'
          type='number'
        >
          Scl-70:
        </Input>

        <Input
          value={!values?.rnp ? value : values.rnp}
          register={register}
          onChange={onChange}
          name='ena_profile.rnp'
          placeholder='rnp...'
          type='number'
        >
          RNP:
        </Input>

        <Input
          value={!values?.jo_1 ? value : values.jo_1}
          register={register}
          onChange={onChange}
          name='ena_profile.jo_1'
          placeholder='jo-1...'
          type='number'
        >
          Jo-1:
        </Input>

        <Input
          value={!values?.ss_a_ro ? value : values.ss_a_ro}
          register={register}
          onChange={onChange}
          name='ena_profile.ss_a_ro'
          placeholder='SS-A/Ro...'
          type='number'
        >
          SS-A/Ro:
        </Input>

        <Input
          value={!values?.anti_rib_p ? value : values.anti_rib_p}
          register={register}
          onChange={onChange}
          name='ena_profile.anti_rib_p'
          placeholder='Anti Rib-P...'
          type='number'
        >
          Anti Rib-P:
        </Input>

        <Input
          value={!values?.anti_cenp_b ? value : values.anti_cenp_b}
          register={register}
          onChange={onChange}
          name='ena_profile.anti_cenp_b'
          placeholder='Anti CENP-B...'
          type='number'
        >
          Anti CENP-B:
        </Input>

        <Input
          value={!values?.ss_a_52 ? value : values.ss_a_52}
          register={register}
          onChange={onChange}
          name='ena_profile.ss_a_52'
          placeholder='SS-A/52...'
          type='number'
        >
          SS-A/52:
        </Input>

        <Remarks
          values={!values?.remarks ? value : values.remarks}
          name='ena_profile.remarks'
          register={register}
        />
      </section>
    </>
  )
}
