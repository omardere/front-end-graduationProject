import { Component } from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Myheader from "./component/My_header";
import Portfolio from "./component/Portfolio";
import Services from "./component/Services";
import Team from "./component/Team";
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Product from "./component/Product";
import Cart from "./component/Cart";
import ProductDetail from "./component/Product_detail";
import CheckOut from "./component/CheckOut";
import Login from "./component/Login";
import Signup from "./component/Signup";
import HeaderAdmin from "./component/Admin/HeaderAdmin";
import Sidebar from "./component/Admin/Sidebar";
import Dachboard from "./component/Admin/Dachboard";
import FormEmployee from "./component/Admin/FormEmployee";
import FormMaterial from "./component/Admin/FormMaterial";
import FormProduct from "./component/Admin/FormProduct";
import FormStore from "./component/Admin/FormStore";
import PageContact from "./component/Admin/PageContact";
import TableEmployee from "./component/Admin/TableEmployee";
import TableMaterial from "./component/Admin/TableMaterial";
import TableProduct from "./component/Admin/TableProduct";
import TableStore from "./component/Admin/TableStore";
import TableSublayer from "./component/Admin/TableSublayer";
import UserProfile from "./component/Admin/UserProfile";
import FormSublayer from "./component/Admin/FormSublayer";
import FormCustomer from "./component/Admin/FormCustomer";
import FormDepartment from "./component/Admin/FromDepartment";
import NextProduct from "./component/Admin/NextProduct";
import SidebarEmp from "./component/Admin/SidebarEmp";
import ViewProduct from "./component/Admin/ViewProduct";
import MaterialProduct from "./component/Admin/MaterialProduct";
import NextNextProduct from "./component/Admin/NextNextProduct";
import LineChart from "./component/Admin/LineChart";
import Detection from "./component/Admin/Detection";

function App ()  {

     if(localStorage.getItem("role")==="Admin"){ 
  return (
    <div>   
      <BrowserRouter>
      <HeaderAdmin/>
      <Sidebar/>
        <Routes>
          <Route path="/FE" element={<FormEmployee/>} />
          <Route path="/chart" element={<LineChart/>} />
          <Route path="/FM" element={<FormMaterial />} />
          <Route path="/FD" element={<FormDepartment />} />
          <Route path="/FP" element={<FormProduct />} />
          <Route path="/FS" element={<FormStore />} />
          <Route path="/PageC" element={<PageContact />} />
          <Route path="/TE" element={<TableEmployee />} />
          <Route path="/TM" element={<TableMaterial />} />
          <Route path="/TP" element={<TableProduct />} />
          <Route path="/TStore" element={<TableStore />} />
          <Route path="/TSublayer" element={<TableSublayer />} />
          <Route path="/UP" element={<UserProfile />} />
          <Route exact  path="/" element={<Dachboard/>} />
          <Route path="/FC" element={<FormCustomer/>} />
          <Route path="/FSub" element={<FormSublayer/>} />
          <Route path="/NP" element={<NextProduct/>} />
          <Route path="/NNP" element={<NextNextProduct/>} />
          <Route path="/VP" element={<ViewProduct/>} />
          <Route path="/MP/:handle" element={<MaterialProduct/>} />
          <Route path="/detc" element={<Detection/>} />


        </Routes>
      
      </BrowserRouter> 
       
      


</div>
  
  );}
  else if(localStorage.getItem("role")==="Employee"||localStorage.getItem("role")==="Head")
{
  return(
<div>   
      <BrowserRouter>
      <HeaderAdmin/>
      <SidebarEmp/>
        <Routes>
          <Route path="/FE" element={<FormEmployee/>} />
          <Route path="/chart" element={<LineChart/>} />
          <Route path="/FM" element={<FormMaterial />} />
          <Route path="/FD" element={<FormDepartment />} />
          <Route path="/FP" element={<FormProduct />} />
          <Route path="/FS" element={<FormStore />} />
          <Route path="/PageC" element={<PageContact />} />
          <Route path="/TE" element={<TableEmployee />} />
          <Route path="/TM" element={<TableMaterial />} />
          <Route path="/TP" element={<TableProduct />} />
          <Route path="/TStore" element={<TableStore />} />
          <Route path="/TSublayer" element={<TableSublayer />} />
          <Route path="/UP" element={<UserProfile />} />
          <Route exact  path="/" element={<ViewProduct/>} />
          <Route path="/FC" element={<FormCustomer/>} />
          <Route path="/FSub" element={<FormSublayer/>} />
          <Route path="/NP" element={<NextProduct/>} />
          <Route path="/MP/:handle" element={<MaterialProduct/>} />
          <Route path="/detc" element={<Detection/>} />

        </Routes>
      
      </BrowserRouter> 
       
      


</div>
  )}
else    {
      return (
        <div>
          
          <BrowserRouter> 
              <Myheader />  
             <Routes>
              <Route path="/Product" element={<Product />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Product_detail/:handle" element={<ProductDetail />} />
              <Route path="/CheckOut" element={<CheckOut />} />
              <Route   path="/hero" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route exact path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>        
          </BrowserRouter>
          </div>
      )
    }

  
}


export default App;
