import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navigation from './Header/Navigation'
import Switch from './Header/Switch'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch />
      </BrowserRouter>
    </>
  )
}

export default App
