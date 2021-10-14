import React, { useRef, useState } from "react";
import logo from "../resources/GitHub-Mark.svg";
import avatar from "../resources/avatar.png";
import Selector from "./selector";


const sortTypes = [
  { name: "Best match", query: "" },
  { name: "Most followers", query: "sort:followers-desc" },
  { name: "Fewest followers", query: "sort:followers-asc" },
  { name: "Most recently joined", query: "sort:joined-desc" },
  { name: "Least recently joined", query: "sort:joined-asc" },
  { name: "Most repositories", query: "sort:repositories-desc" },
  { name: "Fewest repositories", query: "sort:repositories-asc" },
];



function Nav({ handleSearch }: any) {
  const input = useRef<HTMLInputElement>(null);
  const [sort, setSort] = useState("")

  

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      let query = e.target.value
      if(query !== "") handleSearch(encodeURIComponent(`${query} ${sort}`));
    }
  };

  const handleClick = () => {
    let query = input?.current?.value
    if(query !== "") handleSearch(encodeURIComponent(`${query} ${sort}`));
  };

  const sortChange = (e: any) => {
    let query = input?.current?.value
    setSort(e.target.value)
    if(query !== "") handleSearch(encodeURIComponent(`${query} ${e.target.value}`));
  }

  return (
    <div className="bg-white border-b p-4 w-full flex items-center gap-4 justify-between">
      <div className="flex">
        <div
          className="w-10 h-10 bg-contain bg-center bg-no-repeat mr-2"
          style={{ backgroundImage: `url('${logo}')` }}
        ></div>
        <input
          className="w-96 bg-gray-200 rounded-l px-4 py-2"
          placeholder="Search query here..."
          type="text"
          ref={input}
          onKeyDown={handleKeyDown}
        />
        <div
          className="px-4 py-2 bg-black text-white font-bold text-center cursor-pointer rounded-r "
          onClick={handleClick}
        >
          Search
        </div>
        <Selector options={sortTypes} handleChange={sortChange}/>
        
      </div>
      <div className="flex items-center gap-2 ">
        <span>
          Singed in as{" "}
          <a
            className="font-bold"
            href="https://github.com/Voidpixol"
            target="_blank"
          >
            John A. Soto
          </a>
        </span>
        <div
          className="p-6 bg-cover rounded-full bg-no-repeat border"
          style={{ backgroundImage: `url('${avatar}')` }}
        ></div>
      </div>
    </div>
  );
}

export default Nav;
