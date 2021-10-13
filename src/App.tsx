
import { useState, useEffect } from 'react'
import {getData} from './helpers/api'
import Nav from './components/nav'

import Content from './components/content'
function App() {
  
  const [state, setState] = useState({total: 0, users: [], currentPage: 0, total_pages: 0})
  
  const getUsers = async (value: string) => {
    const data = await getData(value)
    setState({...state, total: data.total, users: data.users})
  }
  const handleKeyDown = (e: any) => {
    if(e.key === 'Enter') {
     getUsers(e.target.value)
    }
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className="flex flex-col h-screen">
        <Nav onKeyDown={handleKeyDown}/>
        <div className="flex bg-gray-100 flex-grow">
        
          <Content {...state}/>
        </div>
        
        
    </div>
  )
}

export default App
