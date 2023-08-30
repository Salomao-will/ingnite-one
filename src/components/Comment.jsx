import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export default function Comment() {
  return (
    <div className={styles.Comment}>
      <img src="https://github.com/Salomao-will.png" alt="" />

      <div className={styles.CommentBox}>

        <div className="commentContent">
          <header>
            <div className={styles.authorAndTimes}>
              <strong>Salomas Dev</strong>
              <time title='22 de Agosto de 2023' dateTime='2023-08-22'>Cerca de uma 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Salomas, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
          </button>
          Aplaudir <span>13</span>
        </footer>
      </div>
    </div>
  )
}
