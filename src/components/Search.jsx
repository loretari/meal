
import { useState } from 'react';
import { useGlobalContext } from "../context";

const Search = () => {

    const { setSearchTerm, fetchRandomMeal } = useGlobalContext()
    const [text, setText] = useState('')

    const {setSearchTerm, fetchRandomMeal } = useGlobalContext()

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text) {
            setSearchTerm(text)

        }
    }

    const handleRandomMeal = () => {
        setSearchTerm('')
        setText('')
        fetchRandomMeal()
    }




    return <header className = "search-container">
        <form onSubmit= {handleSubmit}>

        </form>
    </header>
}

export default Search