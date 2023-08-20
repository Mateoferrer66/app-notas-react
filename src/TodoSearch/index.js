import React from 'react';
import { TareaContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TareaContext);
  
    return (
      <input 
      placeholder = " Buscar Tarea " 
      className ="TodoSearch"
      value={searchValue}
      onChange={(event) => {
      setSearchValue(event.target.value);
      }}/>
    );
  }
  
  
export { TodoSearch };