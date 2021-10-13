import React from 'react'

function Nav(props: any) {
    return (
        <div className="bg-white p-8 w-full flex justify-center">
            <input className="w-96 bg-gray-200 rounded-md px-4 py-2" type="text" onKeyDown={props.onKeyDown} />
        </div>
    )
}

export default Nav
