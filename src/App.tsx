import reactLogo from './assets/react.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
        </div>
        {          
          ["01", "02", "03"].map(value => <button onClick={()=>navigate(`/practice/${value}`)}>{value}번 바로가기</button>)
        }
      </section>
    </>
  )
}

export default App
