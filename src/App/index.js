import React from 'react';
import { AppFront } from './AppFront';
import { TareaProvider } from '../TodoContext';

function App() {
  return(
    <TareaProvider>
      <AppFront />
    </TareaProvider>
  );
}
export default App;
