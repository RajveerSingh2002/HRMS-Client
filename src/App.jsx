// module transfer the code form one file to another
// jsx help us to write js code in react file
import Login from "./Component/loginpage/login";
import Signup from "./Component/signuppage/signuppage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Pannel from "./Component/admin/pannel";
import Dashboard from "./Component/admin/Dashboard";
import Employees from "./Component/admin/Pages/Employees";
import Reports from "./Component/admin/Pages/Reports";
import Settings from "./Component/admin/Pages/Settings";
import Attendance from "./Component/admin/Pages/Attendance";
import LeaveRequests from "./Component/admin/Pages/LeaveRequests";
import Payroll from "./Component/admin/Pages/Payroll";
import Performance from "./Component/admin/Pages/Performance";

function App(){
  return(
    <>  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signuppage" element={<Signup/>}/>     
      <Route path="/admin" element={<Pannel/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="employees" element={<Employees/>}/>
      <Route path="employee" element={<Employees/>}/>
      <Route path="attendance" element={<Attendance/>}/>
      <Route path="leave/requests" element={<LeaveRequests/>}/>
      <Route path="pay/roll" element={<Payroll/>}/>
      <Route path="performance" element={<Performance/>}/>
      <Route path="reports" element={<Reports/>}/>
      <Route path="settings" element={<Settings/>}/>
      </Route>   
      {/* <Route path="/admin/pannel" element={<Pannel/>}/> */}
      
    </Routes>
    </BrowserRouter>
    {/* <div>heloooooooooooo</div>
    <Login/>
    <Signup/> */}
    </>
  );
}

export default App;
