import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import List from './components/List';
import Faq from './components/Faq';
import Form from './components/FormSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <List />
      <Faq />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
