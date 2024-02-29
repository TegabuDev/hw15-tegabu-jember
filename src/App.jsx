import './App.css'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Header from './components/Header'
import students from './data/students'


function App() {
  return (
    <div className='container'>
      <Header/>
      <Dashboard students={students}/>
      <Footer/>
    </div>
  )
}

export default App
