import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TareaContext = React.createContext();

function TareaProvider({ children }) {
    
  const {item: tarea, saveItem: saveTareas, loading, error,} = useLocalStorage('Metas_v1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState('true');

  const completedTareas = tarea.filter(tarea => !!tarea.completed).length;
  const totalTareas =  tarea.length;

  const searchedTareas = tarea.filter(
    (tarea) => {
      const tareaText = tarea.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return tareaText.includes(searchText);
    }
  );

    const completeTarea = (text) => {
    const newTareas = [...tarea];
    const tareaIndex = newTareas.findIndex(
      (tarea) => tarea.text === text
    );
    newTareas[tareaIndex].completed = true;
    saveTareas(newTareas);
  };

  const addTarea = (text) => {
    const newTodos = [...tarea];
    newTodos.push({
      text,
      completed: false,
    });
    saveTareas(newTodos);
  };

  const deleteTarea = (text) => {
    const newTareas = [...tarea];
    const tareaIndex = newTareas.findIndex(
      (tarea) => tarea.text === text
    );
    newTareas.splice(tareaIndex, 1);
    saveTareas(newTareas);
  };

    return (
        <TareaContext.Provider value={{
            loading,
            error,
            completedTareas,
            totalTareas,
            searchValue, 
            setSearchValue, 
            searchedTareas, 
            completeTarea, 
            deleteTarea,
            openModal,
            setOpenModal,
            addTarea, 
            }}>
            
            {children}

        </TareaContext.Provider>
    );
}

export { TareaContext, TareaProvider };