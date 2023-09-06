import logo from './logo.svg';
import './App.css';

function send() {
  console.log("send");
}

function App() {
  return (
    <div className="main">
      <div className="content">
        <h1 className="title">
          Email Demo
        </h1>
        <button className="btn" onClick={send}>Send</button>
      </div>
    </div>
  );
}

export default App;
