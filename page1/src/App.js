import Header from "./header";
import Navbar from "./navbar";
import "./app.css";
import Cards from "./cards";
import Cards2 from "./cards2";
import Footer from "./footer";
function App() {
  return (
    <div>
   <div class="row ">
   <Navbar/>
   </div>
   <div class="row " style={{justifyContent:"center",alignItems:"center"}}>

   <div class="col ">
<Header/>
<Cards/>
<Cards2/>



</div>


</div> 
<Footer/>



    </div>
  );
}

export default App;
