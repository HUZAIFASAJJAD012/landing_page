import Carusal from "./screens/carusal";
import Navbar from "./screens/navbar";
import Card from "./screens/cards";

function App() {
  return (
    <div>

   <div class="row ">

   </div>

   <div class="row " style={{justifyContent:"center",alignItems:"center"}}>
   <Carusal/>
<Navbar/>



</div> 

<div class="row ">

<Card/>

</div>



    </div>
  );
}

export default App;
