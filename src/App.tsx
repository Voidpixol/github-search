
import { useState, useEffect } from 'react'
import {getData} from './helpers/api'
import Nav from './components/nav'

import Content from './components/content'
import Paginator from './components/paginator'
function App() {
  
  const [state, setState] = useState({total: 0, users: [], currentPage: 1, per_page: 5})
  const [query, setQuery] = useState("")
  
  
  const getUsers = async (value: string, page: number = 1)  => {
    const data = await getData(value, page)
    setState({...state, total: data.total, users: data.users, currentPage: data.page})
  }
  const handleKeyDown = (e: any) => {
    if(e.key === 'Enter') {
      setQuery(e.target.value)
     getUsers(e.target.value)
    }
  }
  const handlePage = (n: number) => {
    setState({...state, currentPage: n})
    getUsers(query, n)
  }

  useEffect(() => {
    console.log(state)
    console.log(query)
  }, [state])

  const showContent = () => {
    return (
      <>
        <Content {...state} />
        {state.total > state.per_page ? (
          <Paginator
            switchPage={handlePage}
            pages={Math.floor(state.total / state.per_page)}
            currentPage={state.currentPage}
          />
        ) : (
          ""
        )}
      </>
    );
  };

  return (
    <div className="flex flex-col h-screen">
        <Nav onKeyDown={handleKeyDown}/>
        <div className="flex bg-gray-100 flex-grow flex-col py-8 lg:px-28">
          {showContent()}
        </div>
    </div>
  )
}

export default App
