import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/dev-gabs.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentComment}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Salvador</strong>
              <time title='19 de Janeiro de 2023 às 20h50' dateTime='2023-01-19 20:50:23'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}