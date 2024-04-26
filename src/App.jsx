import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';

import './index.css';


function App() {

  return (
    <Router>
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>Todo List App</h1>
        <Routes>
          <Route path="/" element={<TodoList />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App;
