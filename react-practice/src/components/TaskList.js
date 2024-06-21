import React, { useState } from 'react';
import { TaskCard } from './TaskCard';
import {BoxCard} from './BoxCard'

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Bharath", completed: false }, 
    { id: 2, name: "Harshitha", completed: true },
    { id: 3, name: "Revi", completed: false },
    { id: 4, name: "Gordon", completed: true }
  ]);

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
      <BoxCard result="success">
          <p className="title">Lorem ipsum dolor sit.</p>
          <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
      </BoxCard>
      
      <BoxCard result="warning">
          <p className="title">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, commodi.</p>
      </BoxCard>

      <BoxCard result="alert">
          <p className="title">Lorem, ipsum dolor.</p>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat sunt reprehenderit commodi dolores.</p>
      </BoxCard>
    </section>
  );
};
