import './App.css'
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';

function App() {
    
    return(
        <div className = "App">
            <Header />
            <AddTask/>
            <TaskList title="Random" />
            <Footer />
        </div>
    );
}

export default App

