import { useState } from 'react';
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import Task from './Task';
import { info } from './TaskControl';
function TaskSearch(){
    const [dt,setDt]=useState(info);
    const [dis,setDis]=useState(true);
    function displayDetails()
    {
      let name=document.getElementById("ser").value;
      const index=info.findIndex(x=>x.name===name);
      const filterData=info.filter(x=>x.name===name);
      console.log(index);
      if(name!=="")
      {
        if(index!==-1)
          {
            if(dis){
            setDis(false);
            setDt(filterData);
            }
            else
            {
              setDis(true);
            }
          }
          else
          {
            alert("Sorry No such Task exist!");
          }
      }
      else{
        alert("Empty");
      }
    }
    return(
        <Container>
         <InputGroup className="mb-3">
        <InputGroup.Text>Search</InputGroup.Text>
        <Form.Control   id='ser' placeholder='Enter Task'/>
        <Button variant="danger" id="button-addon2" onClick={displayDetails}>Search</Button>
        </InputGroup>
      <div hidden={dis}>
      <Task name={dt.map(x=>x.name)}/>
      </div>
      </Container>
    );
}
export default TaskSearch;