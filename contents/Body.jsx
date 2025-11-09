
export default function Body({ addTask, onDelete, taskComplete, editTask }) {
  
  return (
    <ul>
      {addTask.map((elem) => (
        <li
          key={elem.id}
          className={elem.isCompleted ? "complete" : ""}
          onClick={() => taskComplete(elem.id)}
        >
          <p>{elem.task}</p>
          <div className="buttonContainer">
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
