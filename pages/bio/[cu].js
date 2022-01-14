import { prisma } from 'db/prisma'
import { getAge } from 'hooks/dateTime/getAge'
import { useForm } from 'react-hook-form'
import { LazyBio } from 'components/LazyBio'

export default function Bio ({ receiptByCu = {} }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    const culo = {
      json: receiptByCu.json,
      data,
      cuiid: receiptByCu.cuiid
    }

    window
      .fetch('/api/receiptBio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/text'
        },
        body: JSON.stringify(culo)
      })
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => console.log('UPDATED [BIO]', data))
      .catch(err => console.log('ERROR [BIO]', err))
  }

  return (
    <>
      <section>
        <p>
          Nombre: <strong>{receiptByCu.owner.fullName}</strong>
        </p>
        <p>
          Edad: <strong>{getAge(receiptByCu.owner.birth)}</strong>
        </p>
        <p>
          Sexo: <strong>{receiptByCu.owner.sex}</strong>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {receiptByCu.json.length > 0 &&
            receiptByCu.json.map(({ name, values = null, ...rest }) => {
              console.log('[REST]', rest, name)
              return (
                <div key={name}>
                  <LazyBio name={name} values={values} register={register} />
                </div>
              )
            })}
          <button>CLiCK ME please</button>
        </form>
        <a
          href={`/bio/${receiptByCu.cuiid}`}
          filename={`${receiptByCu.cuiid}.pdf`}
          title='Descargar en pdf'
        >
          Descargar PDF
        </a>
      </section>
    </>
  )
}

export async function getServerSideProps (req, res) {
  //   if (!session.user) return { props: { orders: {}, result: [] } }

  const receiptFinded = await prisma.receipt.findUnique({
    where: {
      cuiid: req.query.cu
    },
    include: {
      owner: true
    }
  })

  // console.log('[receiptFinded]', receiptFinded)

  // const test = [
  //   { name: 'aptt', values: 50, price: 5 },
  //   { name: 'ca_en_orina_simple', values: 33, price: 2 },
  //   {
  //     name: 'parasitol_gico_concentrado',
  //     values: {
  //       fisico_quimico: {
  //         consistencia: 'sólido',
  //         color: 'azul',
  //         ph: 7.5,
  //         aspecto: 'limpio'
  //       },
  //       microscopico: {
  //         protozooarios: 'el protooooo',
  //         vermes: 'el vermes',
  //         leucocitos: 'la leucocitos',
  //         eritrocitos: 'la eritrocitos',
  //         levaduras: 'la levaduras',
  //         flora_microbiana: 'la flora microbiana'
  //       }
  //     },
  //     price: 2
  //   },
  //   { name: 'azucares_reductores_simple', values: {}, price: 2 },
  //   { name: 'toxoplasmosis_hai_simple', values: {}, price: 2 },
  //   { name: 'anti_m_b_g_simple', values: {}, price: 2 },
  //   {
  //     name: 'covid_19_ac_neutralizantes_simple',
  //     values: {},
  //     price: 2
  //   },
  //   { name: 'covid_19_ag_nasal_simple', values: {}, price: 2 }
  // ]

  const receiptByCu = {
    cuiid: receiptFinded.cuiid,
    id: receiptFinded.id,
    json: receiptFinded.json,
    createdAt: +new Date(receiptFinded.createdAt),
    saldo: receiptFinded.saldo,
    itotal: receiptFinded.itotal,
    total: receiptFinded.total,
    updatedAt: +new Date(receiptFinded.updatedAt),
    labName: receiptFinded.labName,
    ownerCi: receiptFinded.ownerCi,
    indebtList: receiptFinded.indebtList,
    owner: {
      id: receiptFinded.owner.id,
      fullName: receiptFinded.owner.fullName,
      birth: +new Date(receiptFinded.owner.birth),
      sex: receiptFinded.owner.sex
    }
  }

  return {
    props: { receiptByCu }
  }
}
