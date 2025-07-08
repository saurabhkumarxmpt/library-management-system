import Login from "./components/auth/Login";
import {Routes,Route} from 'react-router-dom';
import DashBoard from "./components/deshboard/Dashboard";
const App=()=>{
  return(
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
    </Routes>
    </>
  )
}

export default App;