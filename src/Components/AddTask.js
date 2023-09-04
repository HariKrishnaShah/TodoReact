import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


function AddTask({ButtonName, Heading, Placeholder}) {
  return (
    <>
      
      <InputGroup className="mb-3">
        <InputGroup.Text>{Heading}</InputGroup.Text>
        <Form.Control aria-label="Task Input" placeholder= {Placeholder ? Placeholder:""}/>
        <Button variant="success">{ButtonName || "ButtonName"}</Button>
      </InputGroup>

    </>
  )
}


export default AddTask