import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import img from './images/IMG_0345.JPG';
import {propTypes} from 'react-bootstrap/Image';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={img} height="600"/>
        
        <p>
          Johnathan Khoa Nguyen
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/johnawin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://github.com/johnawin"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
