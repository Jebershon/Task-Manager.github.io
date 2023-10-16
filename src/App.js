import { useState } from 'react';
import { Card, CardBody } from "react-bootstrap";
import './App.css';
import Contact from './Components/Contact';
import Head from './Components/Header';
import TaskControl from './Components/TaskControl.jsx';
import TaskSearch from './Components/TaskSearch.jsx';
import TaskUpdate from './Components/TaskUpdate';
function App() {
  const [search,setSearch]=useState(true);
  const [update,setUpdate]=useState(true);
  const [display,setDisplay]=useState(false);
  function toggleSearch(){
    setDisplay(true);
    setUpdate(true);
    if(search){
      setSearch(false);
    }
    else{
      setSearch(true);
    }
  }

function Toggledisplay(){
  setSearch(true);
  setUpdate(true);
  if(display){
    setDisplay(false);
  }
  else{
    setDisplay(true);
  }
}
function ToggleUpdate(){
  setSearch(true);
  setDisplay(true);
  if(update){
    setUpdate(false);
  }
  else{
    setUpdate(true);
  }
}
  return (
    <div className="App">
      <header style={{backgroundColor:"red"}}>
      <Head/>
      <div style={{fontFamily:"monospace"}}>
      <ul class="nav nav-pills nav-fill gap-2 p-1 medium shadow-sm" id="pillNav2" role="tablist">
        
        <li class="nav-item" role="presentation">
          <button class="nav-link rounded-5" onClick={toggleSearch} id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Search Task</button>
        </li>

        <li class="nav-item" role="presentation">
          <button class="nav-link rounded-5"  onClick={Toggledisplay}    id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Display</button>
        </li>

        <li class="nav-item" role="presentation">
          <button class="nav-link rounded-5"  onClick={ToggleUpdate}    id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Update Task</button>
        </li>

      </ul>
      </div>
      </header>

      <main>
      <br/>
      {/* <div hidden={display}>
        <TaskDisplay info={info.filter(x=>x.name!==""||x.name!==" ")}/>
      </div> */}
      <br/>

      <div hidden={search} style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
      <Card style={{backgroundColor:"red",color:"white",width:"70%",height:"50%",display:"flex",justifyContent:"center"}}>
        <CardBody>
        <TaskSearch />
        </CardBody>
      </Card>
      </div>

      <br/>

      <div hidden={update} style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
      <Card style={{backgroundColor:"red",color:"white",width:"70%",height:"50%",display:"flex",justifyContent:"center"}}>
        <CardBody>
        <TaskUpdate />
        </CardBody>
      </Card>
      </div>

      <br/>
      <div hidden={display}>
        <TaskControl/>
      </div>
      </main>

      <footer style={{backgroundColor:"red",position:"fixed",left:"0",bottom:"0",width:"100%",textAlign:"center"}}>
        <Contact/>
      </footer>
    </div>
  );
}

export default App;
