import './App.css'
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';

function App() {
    
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("taskList")) || []);

    useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(tasks))
    }, [tasks])

    return(
        <div className = "App">
            <Header />
            <main>
                <AddTask tasks={tasks} setTasks={setTasks}/>
                <TaskList tasks={tasks} setTasks={setTasks}/>
            </main>
            <Footer />
        </div>
    );
}

export default App

