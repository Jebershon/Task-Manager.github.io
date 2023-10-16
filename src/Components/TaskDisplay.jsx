import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, Form } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
function TaskDisplay({info})
{
    return(
      <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
      <Card style={{backgroundColor:"red",color:"white",width:"70%",height:"50%",display:"flex",justifyContent:"center"}}>
        <CardBody>
        <div>
          <Table striped borderless hover responsive="lg" size="lg">
          {info.map((value,index)=>
          <tbody>
          <tr>
          <td style={{backgroundColor:"peachpuff",color:"black"}}>
          <Form.Check
          type="switch"
          id="custom-switch"/>
          </td>
          <td style={{backgroundColor:"peachpuff",color:"black"}}>{value.name}</td>
          </tr>
          </tbody>
          )}
          </Table>
        </div>
        </CardBody>
      </Card>
      </div>
    );
}
export default TaskDisplay;