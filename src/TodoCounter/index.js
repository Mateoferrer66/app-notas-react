import React from 'react';
import './TodoCounter.css';
import { TareaContext } from '../TodoContext';

function TodoCounter(){
  const {
    completedTareas,
    totalTareas,
  } = React.useContext(TareaContext)

    return (
      <h1 className="TodoCounter">
        Has completado <span> {completedTareas} </span>  de  <span> {totalTareas} </span> tareas 
      </h1>
    );
  }
  
export { TodoCounter };