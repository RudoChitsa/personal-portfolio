import './index.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Navigation from './components/Navigation';
import Bio from './components/Bio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Bio />
        <AboutMe />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Education />
    </div>
  );
}

export default App;
