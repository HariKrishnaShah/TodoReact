import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from "./Components/Title"
import AddTask from './Components/AddTask';
import  Alertbar from './Components/Alertbar';
import ListTasks from './Components/ListTasks';
import TaskStates from './Context/TaskStates';
import Toastalert from './Components/Toastalert';

function App() {
  return (
    <>
    <TaskStates>
    <Container className='text-center'>
      <Row>
        <Col md={{ span: 6, offset: 3 }}><Title title = "TODO App" />
        <AddTask key = "New" Heading = "Add new Todo?" Placeholder = "E.g Do Laundary" ButtonName = "Add the Task" type = "task"/>
        <ListTasks />
        <Alertbar Variant = "danger" Msg = "No Task Found" />
        </Col>
        <Toastalert />

      </Row>
    </Container>
    </TaskStates>
    </>
  );
}

export default App;
