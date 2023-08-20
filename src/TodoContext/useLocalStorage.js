import React from 'react';

function useLocalStorage(itemName, initialValue){
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading]= React.useState(true);
  const [error, setError]= React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  });

    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {item, saveItem, loading, error};
  }

  export {useLocalStorage };
  

  // const defaultTareas = [
//   { text: ' Arreglar habitación', completed: false},
//   { text: ' Tomar agua en la mañana', completed: false},
//   { text: ' Estudiar platzi', completed: false},
//   { text: ' Tomar agua en la tarde', completed: false},
//   { text: ' Practicar ingles platzi', completed: false},  
//   { text: ' Organizacion personal', completed: true},
//   { text: ' Tomar agua', completed: false},
//   { text: ' Ejercicio diario', completed: false},
//   { text: ' Tomar agua en la noche', completed: false},
// ]; 
// localStorage.setItem('Metas_v1', JSON.stringify(defaultTareas));
// localStorage.removeItem('Metas_v1');
