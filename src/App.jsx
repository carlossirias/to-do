import { Header } from './components/header'
import { Main } from './components/main'
import { ToDoSection } from './components/todo-section'
import { Footer } from './components/footer'
import './App.css'

function App() {

  return (
    <div className='flex flex-col w-full min-h-screen'>
      <Header/>

      <Main>
        <ToDoSection>
          
        </ToDoSection>
      </Main>
      <Footer/>
    </div>
  )
}

export default App
