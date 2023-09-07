import { FC } from 'react';
import './style.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Bio from './components/Bio';

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Bio />
    </div>
  );
}

export default App;
