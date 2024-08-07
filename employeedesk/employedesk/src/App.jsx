import './App.css'; 
import EmployeeComponent from './components/EmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* Home */}
          <Route path='/' element={<ListEmployeeComponent />} />
          {/* List Employees */}
          <Route path='/employees' element={<ListEmployeeComponent />} />
          {/* Add Employee */}
          <Route path='/add-employee' element={<EmployeeComponent />} />
          {/* Edit Employee */}
          <Route path='/edit-employee/:id' element={<EmployeeComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
