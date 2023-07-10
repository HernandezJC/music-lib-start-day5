// import { useState } from 'react'

// function SearchBar(props){
//     let [searchTerm, setSearchTerm] = useState('')
//     console.log('SEARCH TERM STATE!!!', searchTerm)

//     return (
//         <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
//             <input type="text" placeholder="Enter a search term here"
//             onChange={(e) => setSearchTerm(e.target.value)} />
//             <input type="submit" />
//         </form>
//     )
// }

import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

function SearchBar() {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Search Here" />
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
}

export default SearchBar
    