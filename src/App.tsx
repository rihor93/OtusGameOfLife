import React, { useCallback, useState } from 'react';
import './App.css';
import { BoardComponent } from './gameOfLife/components/BoardComponent';

export const title = "Alex test title"

function App() {
  const [search,  setSearch] = useState('');

  return (
    <div>
      <BoardComponent></BoardComponent>
    </div>
  );
}

export default App;
