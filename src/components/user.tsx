interface IUser {
    avatar_url: string;
    login: string;
    name: string;
    bio: string;
    blog: string;
    location: string;
    followers: number;
    public_repos: number;
    email: string;
    html_url: string;
    score: number;
}

function User({avatar_url, login, name, bio, blog, location, followers, public_repos, email, html_url, score}: IUser) {
    return (
      <div className="border border-gray-200 p-4 rounded-md flex">
        <div className="flex flex-col p-4 justify-center items-center">
          <div
            className="w-16 h-16 bg-contain rounded-full"
            style={{ backgroundImage: `url(${avatar_url})` }}
          ></div>
        </div>
  
        <div className="flex flex-col p-4 w-full">
          <a href={html_url} target="_blank" className="font-bold text-blue-500">
            {name}
            {name != undefined ? <span className="text-gray-500 font-normal"> - {login}</span> : <span>{login}</span>}
            <span className="text-gray-500 font-normal"> - ⭐: {score}</span>
          </a>
          <div>{bio}</div>
          <div className="text-sm text-gray-500">{location}</div>
          <a className="text-sm text-blue-500" href={blog}>
            {blog}
          </a>
          <span className="text-gray-500"> {email}</span>
          <div className="text-sm font-bold text-gray-500">
            {followers != undefined ? <span>followers: {followers}</span> : ""} {public_repos != undefined ? <span>repos: {public_repos}</span> : ""}
          </div>
        </div>
        <div className="w-28 flex flex-col gap-2 items-center justify-center">
          <a href={html_url} target="_blank" className="px-4 py-2 bg-green-500 text-white rounded font-bold cursor-pointer">
            Github
          </a>
        </div>
      </div>
    );
  }
  export default User