
function Selector({options, handleChange}: any) {
    return (
        <select className="w-48 bg-gray-200 rounded px-4 py-2 ml-4" id="select" onChange={handleChange}>
        {options.map((item :any, index :number) => (
          <option key={index} value={item.query}>{item.name}</option>
        ))}
      </select>
    )
}

export default Selector
