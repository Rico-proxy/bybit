import Login from './pages/Login';
import Website from './pages/Website';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
                        <Route
                            path="/"
                            element={<Login />}
                        ></Route>
                        <Route
                            path="/website"
                            element={<Website />}
                        ></Route>
                       
         </Routes>
    </Router>
  );
}

export default App;
