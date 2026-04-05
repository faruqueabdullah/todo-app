import Header from "./Header";
import Body from "./Body";
import { useEffect, useState } from "react";

export default function Appcontainer() {

  // getting tasks from localStorage
  const [addTask, setAddtask] = useState(
    JSON.parse(localStorage.getItem("data")) || [],
  );
  const [value, setValue] = useState("");

  function editTask(id) {
    setAddtask((prev) => prev.filter((elem) => elem.id !== id));

    for (let task of addTask) {
      if (task.id === id) {
        setValue(task.task);
        break;
      }
    }
  }

  function onDelete(id) {
    setAddtask((prev) => prev.filter((elem) => elem.id !== id));
  }

  function taskComplete(id) {
    setAddtask((prev) =>
      prev.map((elem) =>
        elem.id === id ? { ...elem, isCompleted: !elem.isCompleted } : elem,
      ),
    );
  }

  // adding task to localStorage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(addTask));
  }, [addTask]);

  return (
    <div className="flex flex-col mx-auto mt-25 w-120">
      <h1 className="text-2xl font-semibold py-3 px-5">
        My Todos <i className="fa-solid fa-book"></i>
      </h1>

      <div className="w-full flex justify-center items-center flex-col  border p-3 rounded-xl">
        <Header
          addTask={addTask}
          setAddtask={setAddtask}
          setValue={setValue}
          value={value}
        />
        <Body
          addTask={addTask}
          onDelete={onDelete}
          taskComplete={taskComplete}
          editTask={editTask}
        />
      </div>
    </div>
  );
}
