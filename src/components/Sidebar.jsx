import { PencilLine } from 'phosphor-react'
import style from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={style.sidebar}>

      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1683755300481-a1d7f62ce644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwN3xhZXU2ckwtajZld3x8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=50"
      />

      <main className={style.profile}>

        <img
          className={style.avatar}
          src="https://github.com/Salomao-will.png"
        />

        <strong>Salomão Santos</strong>
        <p>Developer Engineer</p>
      </main>

      <footer>
        <button>
          <PencilLine size={20} />
          Editar Perfil
        </button>
      </footer>

    </aside>
  )
}
