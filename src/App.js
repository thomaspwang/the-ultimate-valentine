 
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Question from "./Question";
import Success from "./Success";


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Question/>}/>
          <Route path='/yay' element={<Success/>}/>
        </Routes>
      </Router>
  );
}

export default App;