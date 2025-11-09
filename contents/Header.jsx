import { useEffect, useState } from "react";

function Header({ addTask, setAddtask, editTaskcontainer }) {
  const [input, setInput] = useState("");
  function HandleChange(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    if (input.length === 0 || input.trim() === ""){
      setInput("")
      return
    }
    setAddtask([
      ...addTask,
      {
        id: crypto.randomUUID(),
        task: input,
        isCompleted: false,
      },
    ]);
    setInput("");
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  useEffect(() => {
    editTaskcontainer && setInput(editTaskcontainer.task);
  }, [editTaskcontainer]);

  return (
    <div className="headerContainer">
      <input
        name="task"
        type="text"
        value={input}
        onChange={HandleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter your tasks here..."
      />
      <button onClick={handleClick}>Add task</button>
    </div>
  );
}

export default Header;
