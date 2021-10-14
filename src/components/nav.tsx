import React, { useRef } from "react";
import logo from "../resources/github-mark.svg";
import avatar from "../resources/avatar.png";

function Nav({ handleSearch }: any) {
  const input = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      let query = e.target.value
      if(query !== "") handleSearch(query);
    }
  };

  const handleClick = () => {
    let query = input?.current?.value
    if(query !== "") handleSearch(query);
  };

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
