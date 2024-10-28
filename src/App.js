import './App.css';
import NAMES from './components/data.json';
import { useState, useTransition } from 'react';

function App() {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const changeHandler = (e) => {
    e.preventDefault();
    setInputValue(e.target.value)
    startTransition(() => setQuery(e.target.value))
  }
  const filteredNames = NAMES.filter((item) => {
    return item.first_name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || item.last_name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })
  return (
    <div className="App">
      <input type='text' value={inputValue} onChange={changeHandler}/>
      { isPending && <p>Updating list...</p>}
      {
        
        filteredNames.map((name) => (
          <p key={name.id}>{name.first_name} {name.last_name}</p>
        ))
      }
    </div>
  );
}

export default App;
