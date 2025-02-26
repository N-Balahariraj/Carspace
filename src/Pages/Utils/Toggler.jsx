import React from 'react'

export default function Toggler({opt1,opt2}) {
    return (
        <label className="switch inline-block relative w-[100%] h-[3rem] overflow-hidden rounded-md mb-3 cursor-pointer">
            <input type="checkbox" className="HCheck" /*onClick={(e) => { e.target.checked ? checked(1) : checked(0) }} *//>
            <span className="slider"></span>
            <div className="flex justify-around items-center relative bottom-3">
                <span>{opt1}</span>
                <span>{opt2}</span>
            </div>
        </label>
    )
}
