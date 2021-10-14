import User from "./user";


function Content(props: any) {
  return (
    <div className="flex flex-col p-2 gap-2">
      <p className="font-bold">{props.total === 0 ? '' : `${props.total} results.`}</p>
      {props.users.map((item: any, index: number) => (
        <User key={index} {...item} />
      ))}
    </div>
  );
}



export default Content;
