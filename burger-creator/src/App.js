import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './layout_components/layout/Layout';
import BurgerBuilder from './components/burger_builder/BurgerBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
