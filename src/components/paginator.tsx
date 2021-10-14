import React from "react";

interface Paginator {
  currentPage: number;
  pages: number;
  switchPage: any;
}


function Paginator({ currentPage, pages, switchPage }: Paginator) {
  let limit = pages < 5 ? pages : 5;

  let initialButtons = [...new Array(limit)].map((n, i) => {
      let id = i + 1
      if(id == currentPage) return <div key={id} className="border px-4 py-2 rounded cursor-pointer bg-black text-white"> {id}</div>
      else return <div key={id} onClick={() => switchPage(id)}className="border px-4 py-2 rounded cursor-pointer"> {id}</div>
  })

  let reversedButtons = [...new Array(5)].map((n, i) => {
      let id = currentPage - i;
    if(id == currentPage) return <div className="border px-4 py-2 rounded cursor-pointer bg-black text-white"> {id}</div>
    else return <div onClick={() => switchPage(id)}className="border px-4 py-2 rounded cursor-pointer"> {id}</div>
}).reverse()

 
  let dynamicButtons = () => {
      return(
        <>
            <>
            <div onClick={() => switchPage(currentPage - 2)}className="border px-4 py-2 rounded cursor-pointer"> {currentPage - 2}</div>
            <div onClick={() => switchPage(currentPage - 1)}className="border px-4 py-2 rounded cursor-pointer"> {currentPage - 1}</div>
            </>
            <div className="border px-4 py-2 rounded cursor-pointer bg-black text-white"> {currentPage}</div>
            <>
            <div onClick={() => switchPage(currentPage + 1)}className="border px-4 py-2 rounded cursor-pointer"> {currentPage + 1}</div>
            <div onClick={() => switchPage(currentPage + 2)}className="border px-4 py-2 rounded cursor-pointer"> {currentPage + 2}</div>
            </>
        </>
      )
  }
  const selectPagination = () => {
    if(currentPage < 5) return initialButtons
    if(currentPage >= 5 && currentPage < (pages - 5)) return dynamicButtons()
    else return reversedButtons
    
  }
  return (
    <div className="flex justify-center items-center gap-2">
      {currentPage === 1 ? (
        <div className="border px-4 py-2 bg-gray-200 rounded cursor-pointer">Prev</div>
      ) : (
        <div
          onClick={() => switchPage(currentPage - 1)}
          className="border px-4 py-2 rounded cursor-pointer"
        >
          Prev
        </div>
      )}
      {currentPage >= 5 ? <div onClick={() => switchPage(1)} className="border px-4 py-2 rounded cursor-pointer">1...</div> : ""}
      {selectPagination()}
      {pages < 5 || currentPage == pages? (
        ""
      ) : (
        <div onClick={() => switchPage(pages)} className="border px-4 py-2 rounded cursor-pointer">
          ...{pages}
        </div>
      )}
      {currentPage === pages ? (
        <div className="border px-4 py-2 bg-gray-200 rounded cursor-pointer">Next</div>
      ) : (
        <div
          onClick={() => switchPage(currentPage + 1)}
          className="border px-4 py-2 rounded cursor-pointer"
        >
          Next
        </div>
      )}
    </div>
  );
}

export default Paginator;
