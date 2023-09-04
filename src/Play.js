import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
function Play() {
  return (
    <>
    <Container>
        <div className='d-flex flex-row justify-content-center'>
        <div className="p-2">Add New Task</div>
        <div className="p-2"><input type = "text" placeholder='E.g: Landuary'></input></div>
        <div className="p-2"><Button className='bg-success text-white' variant="light">Add Task</Button>{''}</div>
        </div>
    </Container>

    <Container>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Task #1</Accordion.Header>
        <Accordion.Body>
          Sub Task 1
        </Accordion.Body>
        <Accordion.Body>
          Sub Task 2
        </Accordion.Body>
        <Accordion.Body>
          Sub Task 3
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Task 2</Accordion.Header>
        <Accordion.Body>
          Sub Task 2
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
    </>
  )
}

export default Play;