
export default function Body({ addTask, onDelete, taskComplete, editTask }) {
  
  return (
    <ul className="flex flex-col gap-2 w-full">
      {addTask.map((elem) => (
        <li
          key={elem.id}
          className={`border rounded-xl p-2 cursor-pointer flex items-center justify-between ${elem.isCompleted ? "bg-red-400 line-through" : ""}`}
          onClick={() => taskComplete(elem.id)}
        >
          <p>{elem.task}</p>
          <div className="flex items-center justify-between gap-2">
            <div
              title="edit task"
              className="edittask"
              onClick={(e) => {
                e.stopPropagation();
                editTask(elem.id);
              }}
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </div>
            <div
            title="delete task"
              className="deletetask"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(elem.id);
              }}
            >
              <i className="fa-regular fa-circle-xmark"></i>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
