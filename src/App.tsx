import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes'
import Chatbot from './components/Chatbot/Chatbot'

function App() {
  return (
    <BrowserRouter>
      <MainRoutes/>
      <Chatbot/>
    </BrowserRouter>
  )
}

export default App
