import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export default function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/Salomao-will.png" alt="" />

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Salomas Dev</strong>
              <time title='22 de Agosto de 2023' dateTime='2023-08-22'>Cerca de uma 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Salomas, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Curtir <span>13</span>
          </button>

        </footer>
      </div>
    </div>
  )
}
