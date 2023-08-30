import Header from "./components/Header"
import './global.css'
import style from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import Post from "./components/Post"

function App() {

  return (
    <>

      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <Post />
      </div>

    </>
  )
}

export default App
