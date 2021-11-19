/* eslint-disable react/jsx-indent */
import router, { useRouter } from 'next/router'
import { getDocByCI } from 'db/firebase/firestore'
import { useEffect, useState } from 'react'
import { Button, Input } from 'components'
import { DicList } from 'components/DicList'
import { OrderProfile } from 'components/OrderProfile'

export default function RegisterNewCI () {
  const [checkboxes, setCheckboxes] = useState({})
  const [filteredBox, setFilteredBox] = useState([])
  const { query } = useRouter()
  const [verify, setVerify] = useState(false)
  // const router = useRouter()
  const [byCI, setByCI] = useState(null)
  const { ci } = query
  // Error Handler !important
  useEffect(() => {
    ci && getDocByCI({ ci })
      .then(setByCI)
  }, [ci])

  const handleOrder = (e) => {
    e.preventDefault()
    // Register Completed
    setVerify(true)
  }
  useEffect(() => {
    filter()
  }, [checkboxes, verify])

  function filter () {
    const arr = Object.entries(checkboxes)
    const filtered = arr.filter(item => item[1] !== false)

    setFilteredBox(filtered)
  }

  const handleCheckbox = ({ target }) => {
    const checked = target.checked
    const name = target.name
    setCheckboxes({
      ...checkboxes,
      [name]: checked
    })
  }

  const handleSave = () => {
    console.log('SAVED!')
    router.replace('/registro')
  }

  return (
    <section>
      {
        byCI?.fullName
          ? <OrderProfile
              {...byCI}
              ci={ci}
            />
          : <h1>Cargando... </h1>
      }
      {
        verify
          ? <main>
            <nav>
              <h3>Tipo: </h3>
              <Button onChange={() => setVerify(false)}> Ir atras</Button>
            </nav>
            <div>
          {
            filteredBox.map((item) => {
              console.log(item[1])
              return (
                <Input
                  key={item[0]}
                  name={item.name}
                  onChange={handleCheckbox}
                  type='checkbox'
                  checked={item[1]}
                >{item[0]}
                </Input>
              )
            }
            )
              }
            </div>
            <Button
              onChange={handleSave}
            >Guardar Datos
            </Button>
            </main>
          : <form
              onSubmit={handleOrder}
            >
              <DicList
                checked={checkboxes}
                onChange={handleCheckbox}
              />
              <Button>Continuar</Button>
            </form>
      }
      <style jsx>{`
        form {
          display:flex;
          flex-direction: column;
        }
        section {
          width: 100%;
        }
        nav {
          display: flex;
          width: 100%;
          justify-content: space-between;
        }
        div {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))
        }
        p {
          place-self: center;
          text-align: center;
        }
      `}
      </style>
    </section>
  )
}
