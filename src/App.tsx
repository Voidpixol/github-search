import { useState, useEffect } from 'react'
import {getData} from './helpers/api'
import Nav from './components/nav'

import Content from './components/content'
import Paginator from './components/paginator'
import Footer from './components/footer'
function App() {
  
  const [state, setState] = useState({total: 0, users: [], currentPage: 1, per_page: 5, reachLimit: false, message: ''})
  const [query, setQuery] = useState("")
  
  const getUsers = async (value: string, page: number = 1)  => {
    const data = await getData(value, page)
    if(data.total >= 1)
    {
      const reachLimit = data.users[0].message === undefined ? false : true
      setState({...state, total: data.total, users: data.users, currentPage: data.page, reachLimit, message: ""})
    }
    else setState({...state, message: `No results found 😔...`})

  }
  //useEffect(() => console.log(state))
  const handleSearch = (q: string) =>{
      setQuery(q)
      getUsers(q)
  }
  const handlePage = (n: number) => {
    setState({...state, currentPage: n})
    getUsers(query, n)
  }
  const showContent = () => {
    //results limitations in the api
    const maxResults = state.total > 1000 ? 1000 : state.total
    const totalPages = Math.ceil(maxResults / state.per_page)
    return (
      <>
        <Content {...state} />
        {state.total > state.per_page ? (
          <Paginator
            switchPage={handlePage}
            pages={totalPages}
            currentPage={state.currentPage}
          />
        ) : (
          ""
        )}
      </>
    );
  };
  const errorMessage = () => {
    return (
      <div className="p-4 bg-yellow-100 rounded">
        The Github Search Api reach it's request limits for this IP the
        information will be limited, for more information visit the{" "}
        <a
          className="text-blue-500 font-bold"
          target="_blank"
          href="https://docs.github.com/en/developers/apps/building-github-apps/rate-limits-for-github-apps"
        >
          Github API Docs
        </a>{" "}
      </div>
    );
  };
  const message = () => {
    return (
      <div className="p-4 bg-white rounded">
          {state.message}
      </div>
    );
  };
  return (
    <div className="flex flex-col h-screen">
        <Nav handleSearch={handleSearch}/>
        <div className="flex bg-gray-100 flex-grow flex-col py-8 lg:px-28 gap-2">
          <div className="bg-white p-8 rounded"> 
            <strong>Github User Search 🔍</strong><br/>
            <p>Front-end exercise made for a coding interview using <strong className="text-gray-500">ReactJS, Typescript, Tailwind, PostCSS, ViteCLI</strong> and
            the <a className="text-blue-500 font-bold" href="https://docs.github.com/en/rest/reference/search" target="_blank">GitHub Search API.</a></p>
          </div>
          {state.message != "" ? message() : ""}
          {state.reachLimit ? errorMessage() : ""}
          {showContent()}
        </div>
        <Footer/>
    </div>
  )
}

export default App
