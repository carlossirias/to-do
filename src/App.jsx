import { Header } from './components/header'
import { Main } from './components/main'
import { ToDoSection } from './components/todo-section'
import { ToDoProvider } from './context/ToDo.jsx'
import './App.css'

function App() {

  return (
    <ToDoProvider>
      <Header/>

      <Main>
        <ToDoSection>
          
        </ToDoSection>
      </Main>
    </ToDoProvider>
  )
}

export default App
