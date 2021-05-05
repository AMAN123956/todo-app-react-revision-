import Task from "./Task"
const Tasks = ({tasks,onDelete,onToggle}) => {
    

    return (
        <div>
            {tasks.map((task,index) => (
                /* <h3 key={task.id}>{task.text}</h3> */
                <Task key={index} task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />

            ))
            }
        </div>
    )
}
export default Tasks