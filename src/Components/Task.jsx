import { Table } from "react-bootstrap";
function Task(props)
{ 
    return( 
        <div>
        <Table striped borderless hover responsive="lg" size="lg">
        <tbody>
        <tr>
        <td style={{borderRadius:"2rem",backgroundColor:"peachpuff",color:"black",textAlign:"center"}}>{props.name}</td>
        </tr>
        </tbody>
        </Table>
      </div>
  );
}
export default Task;