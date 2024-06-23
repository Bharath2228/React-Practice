import { useState } from "react"

export const AddTask = () => {

    const [taskValue, setTaskValue] = useState("")

    const handleChange = (event) => {
        setTaskValue(event.target.value)
    }

    const handleReset = () => {
        setTaskValue("")
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: false
        }
        handleReset()
    }

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" value={taskValue}/>
            <select>
                <option value={true}>Completed</option>
                <option value={false}>Pending</option>
            </select>
            <button type="submit">Add Task</button>
            <span onClick={handleReset} className="reset">Reset</span>
        </form>
        
    </section>
  )
}
