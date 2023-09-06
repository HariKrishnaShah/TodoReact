import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import taskcontext from '../Context/TaskContext';
import { useContext } from 'react';
import ListTasks from "./ListTasks"
import AddTask from './AddTask';
import Title from "./Title";

function MainTask() {
    const all = useContext(taskcontext);
  let navigate = useNavigate();
    // eslint-disable-next-line
    useEffect(()=>{
      if(localStorage.getItem('token')!== null)
      {
        document.getElementById("goforhide").style.display = "block";
        all.fetchTask();
      }
      else{
            document.getElementById("goforshow").style.display="block";
        setTimeout(()=>{navigate('/login', {replace:true});},1000)
        
      }    
    // eslint-disable-next-line
    }, []);

  return (
    <>
    <div id = "goforshow" style ={{display:"none"}}><h4><strong><center>Login first to continue. Redirecting to Login Page 1 sec</center></strong></h4></div>
    <div id = "goforhide" style ={{display:"none"}}>
    {localStorage.getItem('token') && 
    <Container className='text-center'>
    <Row>
      <Col md={{ span: 6, offset: 3 }}><Title title = "TODO App" />
      <AddTask key = "New" Heading = "Add new Todo?" Placeholder = "E.g Do Laundary" ButtonName = "Add the Task" type = "task"/>
      <ListTasks />
      </Col>
    </Row>
  </Container>
    }
    </div>
    </>
  );
}

export default MainTask;
