import './App.css'
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';

function App() {
    
    return(
        <div className = "App">
            <Header />
            <TaskList title="Random" />
            <Footer />
        </div>
    );
}

export default App

