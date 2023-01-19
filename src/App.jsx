import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Gabriel Salvador" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero magni tempora, qui natus ad, animi odit dicta velit quia commodi ipsum aut voluptatibus tenetur nulla dolorum. Facere, illum beatae"
      />
    </div>
  )
}

