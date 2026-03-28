function Header({ addTask, setAddtask, setValue, value }) {
  function handleClick() {
    if (value.length === 0 || value.trim() === "") {
      setValue("");
      return;
    }
    setAddtask([
      ...addTask,
      {
        id: crypto.randomUUID(),
        task: value,
        isCompleted: false,
      },
    ]);
    setValue("");
  }

  return (
    <div className="w-full flex my-3">
      <input
        name="task"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        placeholder="Enter your tasks here..."
        className="border-none outline-none bg-gray-100 rounded-tl-xl rounded-bl-xl w-full p-2.5"
      />
      <button
        onClick={handleClick}
        className="w-40 bg-green-400 text-white rounded-tr-xl rounded-br-xl hover:opacity-90"
      >
        Add task
      </button>
    </div>
  );
}

export default Header;
