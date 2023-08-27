
import './App.css';
import AddProduct from './pages/addproduct/addproduct';
import AdminPanel from './pages/adminpanel/adminpanel';
import LoginPage from './pages/loginpage/loginpage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user  ? <Navigate to={"/admin"} /> : <LoginPage />}
        />

        <Route
          path="/admin"
          element={user ?<AdminPanel /> : <Navigate to={"/"} />  }
        />
        <Route
          path="admin/add"
          element={user == null ? <Navigate to={"/"} /> : <AddProduct />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
