import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { EmptyTareas } from '../EmptyTareas';
import { TareasLoading } from '../TodoLoading';
import { TareasError } from '../TodoError';
import { Modal } from '../PortalModal';
import { TareaContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';


function AppFront() {
  
  const {
    loading,
    error,
    searchedTareas, 
    completeTarea, 
    deleteTarea, 
    openModal,
    setOpenModal,
  } = React.useContext(TareaContext);

    return (
        <>
        <TodoSearch />
    
        <TodoCounter />

            <TodoList>
              {loading && (
                <>
                <TareasLoading/>
                <TareasLoading/>
                <TareasLoading/>
                <TareasLoading/>
                <TareasLoading/>
                </>
                )}
              {error && <TareasError/>}
              {(!loading && searchedTareas.length === 0) && < EmptyTareas />}
    
              {searchedTareas.map(tarea => (
                <TodoItem 
                  key={tarea.text} 
                  text={tarea.text}
                  completed={tarea.completed}
                  onComplete={() => completeTarea(tarea.text)}
                  onDelete={() => deleteTarea(tarea.text)}
                  />
              ))}
          </TodoList>

          <CreateTodoButton
            setOpenModal={setOpenModal}
      />

        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}
        </>
      );
}
export { AppFront };