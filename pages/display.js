import { useState, useEffect } from 'react'

export default function Display () {
  const [pdf, setPdf] = useState(null)
  const [image, setImage] = useState()

  const fetchData = async () => {
    const response = await window.fetch('/api/display', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf'
      }
    })
    response.headers.append('Content-Type', 'application/pdf')
    response.headers.set('Content-Type', 'application/pdf')
    return await response.json()
    // console.log('q', q)
    // console.log('response', response)
    // const data = await response
    // setPdf(data)
    // return await response.blob()
  }

  useEffect(() => {
    fetchData()
      .then(setPdf)
  }, [])

  function toBase64 (a) {
    // data:application/pdf;base64," + response.data
    // 'data:image/png;base64,'
    const base64 = btoa(String.fromCharCode(...a))
    const str = `data:image/jpg;base64,${base64}`
    setImage(str)
  }

  useEffect(() => {
    //  const q = window.URL.createObjectURL(pdf)
    //  console.log({ q })
    //  window.open(q)
    /// }

    // const fileURL = URL.createObjectURL(pdf)
    // console.log('fileURL', fileURL)

    if (pdf && pdf?.data?.json) {
      console.log('DATA', pdf?.data?.json)
      toBase64(pdf.data.json.data)
      //    setFile(new window.File([pdf], 'name'))
    }
  }, [pdf, image])

  console.log('PDF', pdf)
  console.log('IMAGE', image)
  return (
    <>
      {
      !image ? <div>loading...</div> : <a src={image} />
    }
      <style jsx>{`
      a , div{
        margin-top: 100px;
      }
      a {
        width: 50px;
        border: 1px solid black;
        height: 50px;
      }
    `}
      </style>
    </>
  )
}
