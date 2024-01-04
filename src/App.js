import CreateTaskForm from "./CreateTaskForm";
import TaskList from "./TaskList";
import EditTaskForm from "./EditTaskForm";
import {useState} from "react";

function App() {

    const [editTaskId, setEditTaskId] = useState(null)

    const onEdit = (id) => {
        setEditTaskId(id)
    }
    const onEditCancel = (id) => {
        setEditTaskId(null)
    }

    return (
        <div className='container'>
            Firebase-todo-2
            <CreateTaskForm/>
            <TaskList onEdit={onEdit}/>
            {<EditTaskForm id={editTaskId} onCancel={onEditCancel}/>}
        </div>
    );
}

export default App;
