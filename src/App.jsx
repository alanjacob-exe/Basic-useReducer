import { useState } from "react";
import { useReducer } from "react";
import Card from "./assets/Components/Card";
import { ADDED_VALUE, EDITED_CARD_VALUE, RESET_TODO } from "./config/ReducerConstants";




function todoReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return {
        todo: [
          ...tasks.todo,
          {
            index: tasks.todo.length,
            content: action.payload.text,
          },
        ],
      };
    }
    case "edited": {
      const updatedTasks = tasks.todo.map((task) => {
        if (task.index === action.payload.index) {
          return {
            ...task,
            content: action.payload.newText,
          };
        }
        return task;
      });

      return {
        todo: updatedTasks,
      };

    }
    case "reset": {
      return {
        todo: []
      };
    }
    default:
      return tasks;
  }
}






function App() {
  const [tasks, dispatch] = useReducer(todoReducer, { count: 0, todo: [] });
  const [inputvalue, setinputvalue] = useState("");

  const handleTextChange = (index, newText) => {
    dispatch({ type: EDITED_CARD_VALUE, payload: { index, newText } })
  }
  return (
    <main className="w-screen h-screen text-white bg-black flex overdlow-hidden">
      <div className="m-auto w-4/6 h-4/6 border-white border-2 rounded-md flex flex-col">
        <div className="w-full h-[15%] border-white border flex content-end">
          <div className="my-auto mx-2 font-semibold w-[20%]">Enter new Value:</div>

          <div className="my-auto flex w-[30%] h-full rounded-md ml-4 ">
            <input type="text" className="w-full h-4/6 my-auto text-black rounded-md focus:ring-2 ring-blue-500 font-semibold "
              value={inputvalue}
              placeholder="Enter Something"
              onChange={(e) => setinputvalue(e.target.value)}
            />

          </div>
          <div className="w-full my-auto flex flex-row-reverse mx-2"><button className="ml-2 w-20 h-10 focus:ring-2 focus:ring-blue-500 bg-purple-900 rounded-md transition duration-200 ease-in-out active:translate-y-1" onClick={() => {
            if (!(inputvalue.length == 0)) {
              { dispatch({ type: ADDED_VALUE, payload: { text: inputvalue } }) }
            }
            else {
              alert("Nothing to Insert")
            }

          }} >
            Insert
          </button>
            <button className=" w-20 h-10 focus:ring-2 focus:ring-blue-500 bg-red-500 rounded-md transition duration-200 ease-in-out active:translate-y-1" onClick={() => {
              dispatch({ type: RESET_TODO })
            }} >
              Reset
            </button></div>
        </div>
        <div className="w-full h-full p-2 overflow-hidden overflow-y-auto">
          {tasks.todo.map((value, index) => (
            <Card key={index} value={value.content} onChange={(e) => {
              handleTextChange(index, e.target.value)
              // console.log("Value is:" + e.target.value)
            }} />
          ))}

          {/* {tasks.map((eachTask, index) => (
            <Card key={index} value={eachTask.value} />
          ))} */}
          {/* {dummyData.map((eachCardData, index) => (
            <Card key={index} value={eachCardData.value} />
          ))} */}
        </div>
      </div>
    </main>
  );
}

export default App;
