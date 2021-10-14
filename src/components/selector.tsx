interface ISelector{
    options: [string]
    handler: any
}

function Selector({options, handler}: ISelector) {
    return (
        <select className="w-48 bg-gray-200 rounded px-4 py-2" id="select">
        {options.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    )
}

export default Selector
