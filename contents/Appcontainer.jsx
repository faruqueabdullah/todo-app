import Header from "./Header";
import Body from "./Body";
import { useEffect, useState } from "react";

export default function Appcontainer() {
  const [addTask, setAddtask] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [editTaskcontainer, setEditTaskcontainer] = useState(null);

  function editTask(id) {
    const taskToEdit = addTask.find((elem) => elem.id === id);
    setEditTaskcontainer(taskToEdit ?? null);
    onDelete(id);
  }

  function onDelete(id) {
    setAddtask((prev) => prev.filter((elem) => elem.id !== id));
  }

  function taskComplete(id) {
    setAddtask((prev) =>
      prev.map((elem) =>
        elem.id === id ? { ...elem, isCompleted: !elem.isCompleted } : elem
      )
    );
  }

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(addTask));
  }, [addTask]);

  return (
    <div className="appContainer">
      <Header
        addTask={addTask}
        setAddtask={setAddtask}
        editTaskcontainer={editTaskcontainer}
      />
      <Body
        addTask={addTask}
        onDelete={onDelete}
        taskComplete={taskComplete}
        editTask={editTask}
      />
    </div>
  );
}
