import React, { useState } from 'react';
import { TaskCard } from './TaskCard';
import {BoxCard} from './BoxCard'

export const TaskList = ({tasks, setTasks}) => {
  
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter(task => id !== task.id));
  }

  return (
    <section className='taskList'>
      <h1>Task List</h1>
      <button onClick={() => setShow(!show)}>{ show ? "Hide" : "Show"}</button>
      <ol>
        {show && tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
        ))}
      </ol>
    </section>
  );
};
