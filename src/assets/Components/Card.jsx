
import { useState } from "react";

export default function Card({ value, onChange }) {
  const [isEditing, setisEditing] = useState(false)

  return (
    < main className="w-full h-[15%] my-1 border rounded-md text-black bg-white flex flex-row" >
      {" "}
      {
        isEditing ? <input type="text" value={value} placeholder={value} onChange={onChange} onBlur={() => setisEditing(false)} className="bg-gray-200 font-semibold rounded-md h-1/2 my-auto border-black border ml-2" /> : <div className="my-auto ml-2 font-semibold" > {value}</div>
      }
      <div className=" flex flex-row-reverse bg-   ml-auto">
        <button className="mx-2 my-auto w-20 h-10 focus:ring-2 focus:ring-blue-500 bg-purple-900 rounded-md transition duration-200 ease-in-out active:translate-y-1" onClick={() => setisEditing(true)}>
          Edit
        </button>

      </div>
    </main >
  );
}
