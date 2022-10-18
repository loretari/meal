
import Favorites from './components/Favorites'
import Meals from './components/Meals'
import Modal from './components/Modal'
import Search from './components/Search'
import './App.css'

export default function App() {
    return (
        <main>
            {/*Meals App*/}
              <Search/>
            {/*/!* <Favorites /> *!/*/}

            <Meals />
            {/*/!* <Modal/> *!/*/}
        </main>
    )
}
