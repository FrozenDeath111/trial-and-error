import './App.css';
import Header from './component/Header/Header';
import Review from './component/Review/Review';
import Shop from './component/Shop/Shop';
import NoMatch from './component/NoMatch/NoMatch';
import Country from './component/Country/Country';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/review" element={<Review/>} />
          <Route path="/country/:name" element={<Country/>} />
          <Route path="*" element={<NoMatch/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
