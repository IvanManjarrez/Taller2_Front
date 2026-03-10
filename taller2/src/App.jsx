import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <>
      <Nav_bar />
      <Titulo />
      <Cursos />
      <Estudiantes />
      <Footer />
    </>
  )
}
function Nav_bar() {
  return (
    <nav className="nav">
      <h2>React academy</h2>
      <ul className="nav_bar">
        <li>Inicio</li>
        <li>Cursos</li>
        <li>Nosotros</li>
      </ul>
    </nav>
  )
}

function Titulo() {
  return (
    <section className='titulo'>
      <h1>Aprende <span>React</span> desde 0</h1>
      <p>Domina la librería más popular del frontend con proyectos <br />
        prácticos y reales
      </p>
      <button>Ver Cursos</button>
    </section>
  )
}

function Cursos() {
  return (
    <section className='cursos'>
      <h2>Nuestros Cursos</h2>
      <p>Elige el camino que mejor se adapte a ti</p>
      <div>
        <article>
          <span>⚛️</span>
          <h3>React Básico</h3>
          <p>Componentes, props, estado y eventos. Todo lo que necesitas para empezar</p>
          <button>Principiante</button>
        </article>
        <article>
          <span>🔁</span>
          <h3>React Hooks</h3>
          <p>Profundiza en useState, useEffect y crea tus propios custom hooks</p>
          <button>Intermedio</button>
        </article>
        <article>
          <span>📁</span>
          <h3>Estado global</h3>
          <p>Gestiona el estado con Context API y aprende cuándo usarlo</p>
          <button>Intermedio</button>
        </article>
        <article>
          <span>🚀</span>
          <h3>React avanzado</h3>
          <p>Rendimiento, patrones avanzados y arquitectura para proyectos grandes</p>
          <button>Avanzado</button>
        </article>
      </div>
    </section>
  )
}

function Estudiantes() {
  const [counter, setCounter] = useState(0);
  return (
    <section className='estudiantes'>
      <h2>Cuántos estudiantes van a inscribirse?</h2>
      <p>Usa los botones para ajustar el número</p>
      <div>
        <button onClick = {() => setCounter(counter - 1)}>-</button>
        <span>{counter}</span>
        <button onClick = {() => setCounter(counter + 1)}>+</button>
      </div>
      <p>Estudiantes inscritos</p>
    </section>
  )
}
function Footer() {
  return (
    <footer>
      <p>© 2026 <span>ReactAcademy</span>. Taller 02 — React fundamentos.</p>
    </footer>
  )
}

export default App

