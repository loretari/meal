
import Favorites from './components/Favorites'
import Meals from './components/Meals'
import Modal from './components/Modal'
import Search from './components/Search'
import './App.css'
import {useGlobalContext} from "./context";

export default function App() {
    const { showModal } = useGlobalContext()
    return (
        <main>
            {/*Meals App*/}
              <Search/>
            {/*/!* <Favorites /> *!/*/}

            <Meals />
            { showModal && <Modal/>  }

        </main>
    )
}
