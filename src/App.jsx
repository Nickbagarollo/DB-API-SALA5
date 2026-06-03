import s from './App.module.css'
import { useEffect, useState } from 'react'
import { api } from './constants/api'

import logo from '/logo.png'
import { Card } from './components/card'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState()
  const [inputPage, setInputPage] = useState("")


  useEffect(() => {
    api.get('/characters').then((response) => {
      setData(response.data.items)
    }).catch((error) => {
      console.log("deu Ruim!", error)
    })
   
  }, [page])
  
  return (
    <>
      <img className={s.logo} src={logo} alt="Logo" />
    <div>
      <label>Digite uma página</label>
      <input min={1} max={42} type="number" placeholder='1/42' value={inputPage} onChange={(e) => setInputPage(e.target.value)}/>
      <button onClick={() => setPage(Number(inputPage))}>BUSCAR</button>
    </div>
    <h1>Dragon Ball</h1>
      <main>
        {data.map(item => {
          return(
           <Card unico={item.id} imagem={item.image} nome={item.name} especie={item.species} origem={item.origin.name}/>
          )
        })}
      </main>
    </>
  )
}

export default App
