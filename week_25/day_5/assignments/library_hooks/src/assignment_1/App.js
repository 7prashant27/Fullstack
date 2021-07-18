import React , { useState }from 'react';

import {SearchBar} from "./Components/Searchbar"
function App(props) {
  const [query,setQuery] = useState("")
  const [loading, setLoading ] = useState(false)
  const [suggestion, setSuggestions] = useState([]) 
  return (
    <div className = "App">
      <SearchBar />
    </div>
  );
}

export default App;
