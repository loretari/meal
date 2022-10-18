
import { useState } from 'react';
import { useGlobalContext } from "../context";

const Search = () => {

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }





    return <header className = "search-container">
        <form onSubmit= {handleSubmit}>
            <input type = "text" onChange={handleChange} value= {text} placeholder = 'type favorite meal' claaName = 'form-input'/>
            <button type = "submit" claaName = 'btn'>Search</button>
            <button type = "button" claaName = 'btn btn-hipster'>Surprise me!</button>
        </form>
    </header>
}

export default Search