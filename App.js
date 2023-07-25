import logo from './logo.svg';
import './App.css';
import Employeelist from './component/Employeelist';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Addemployee from './component/Addemployee';
import Editemployee from './component/Editemployee';
import Details from './component/Details';

function App() {
  return (
    <div className="App">
      <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Employeelist/>}></Route>
                <Route path='/add' element={<Addemployee/>}></Route>
                <Route path='/edit/:id' element={<Editemployee/>}></Route>
                <Route path='/details/:id' element={<Details/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
