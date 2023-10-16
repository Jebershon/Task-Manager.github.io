import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Button, CloseButton, Container, Form, InputGroup } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

let info=[];
function TaskControl()
{
    const [data,setData]=useState([]);
    const [dis,setDis]=useState("");
    
    function del(index){
      setData(data.filter(x=>x!==data[index]));
    }


    function displayDetails()
    {
        let dt=document.getElementById("task").value;
        function store(){
          return{
            name:dt
          };
        }
        if(dt!==""){
          let temp=store();
          data.push(temp);
          setData(data);
          setDis(dt);
        }
        else{
        alert("Empty");
      }
    }

    info=data;

    return(
        <>
        <Container>
        <InputGroup className="mb-3">
        <InputGroup.Text>Task</InputGroup.Text>
        <Form.Control   id='task' placeholder='Enter Task'/>
        {/* <Form.Control   id='prio' placeholder='Enter priority'/> */}
        <Button variant="outline-danger" id="button-addon2" onClick={displayDetails}>Add Task</Button>
        </InputGroup>
        <div>
          <Table striped borderless hover responsive="lg" size="lg">
          {data.map((value,index)=>
          <tbody>
          <tr>
          <td style={{backgroundColor:"peachpuff",color:"black"}}>
          <Form.Check
          type="switch"
          id="custom-switch"/>
          </td>
          <td style={{backgroundColor:"peachpuff",color:"black"}}>{value.name}</td>
          <td style={{textAlign:"right",backgroundColor:"peachpuff",color:"black"}}><CloseButton onClick={()=>del(index)} variant="dark" size="lg"></CloseButton></td>
          </tr>
          </tbody>
          )}
          </Table>
        </div>
      </Container>
      </>
    );
}
export default TaskControl;
export { info };
