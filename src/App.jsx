import ToDo from "./Components/ToDo";
import { createContext, useState } from "react";

export const ToDoList = createContext();
const App = () => {
  const [list, setList] = useState([
    { id: 1, text: "Sample 1 Text", checked: true },
    { id: 2, text: "Sample 2 Text", checked: true },
    { id: 3, text: "Sample 3 Text", checked: false },
  ]);

  return (
    <ToDoList.Provider value={{ list, setList }}>
      <div className="main">
        <ToDo />
      </div>
    </ToDoList.Provider>
  );
};

export default App;
