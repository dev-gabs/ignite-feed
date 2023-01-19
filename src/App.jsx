import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

        <main>
          <Post author='Gabriel Salvador' content='Salve rapaziada tudo belezinha'/>
        </main>
      </div>
    </div>
  )
}

