import './App.css';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {

  return (
    <div className="App"></div>
  );
}

export default App;
