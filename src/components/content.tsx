

function Content(props: any) {
  return (
    <div className="flex-grow flex  flex-col gap-2 p-4 md:p-8 md:mx-16 lg:mx-96 lg:p-16">
      <p className="font-bold">{props.total} users found. pages{props.total / 5}</p>
      {props.users.map((item: any, index: number) => (
        <User key={index} {...item} />
      ))}
    </div>
  );
}
function User(props: any) {
  return (
    <div className="border border-gray-200 p-4 rounded-md flex">
      <div className="flex flex-col p-4 justify-center items-center">
        <div
          className="w-16 h-16 bg-contain rounded-full"
          style={{ backgroundImage: `url(${props.avatar_url})` }}
        ></div>
      </div>

      <div className="flex flex-col p-4 w-full">
        <div className="font-bold text-blue-500">
          {props.name}
          <span className="text-gray-500 font-normal"> - {props.login}</span>
        </div>
        <div>{props.bio}</div>
        <div className="text-sm text-gray-500">{props.location}</div>
        <a className="text-sm text-blue-500" href={props.blog}>
          {props.blog}
        </a>
        <span className="text-gray-500"> {props.email}</span>
        <div className="text-sm font-bold text-gray-500">
          followers: {props.followers} repos: {props.public_repos}
        </div>
      </div>
      <div className="w-28 flex flex-col gap-2 items-center justify-center">
        <button className="p-4 bg-black text-white rounded-md font-bold ">
          Github
        </button>
      </div>
    </div>
  );
}
export default Content;
