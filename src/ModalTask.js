import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useSelector, useDispatch } from "react-redux";
import { updateItems } from './SlicePage';

function MyVerticallyCenteredModal(props) {

    const {selectedTask}=useSelector((state)=>state.tasks)

    const[description,setDescription]=useState("")

    const[id,setId]=useState(0)
    const dispatch=useDispatch()

    const updateDetails=()=>{
      props.onHide()

      dispatch(updateItems({id,description}))
    }
    
    useEffect(()=>{
      if(Object.keys(selectedTask).length !==0){
        setDescription(selectedTask.description)
        setId(selectedTask.id)
      }
     
    },[selectedTask])

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal Box
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Items</Form.Label>
                  <Form.Control type="text" placeholder="Enter Items" 
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}

                  />
              </Form.Group>

            </Form>
        </Modal.Body>

        <Modal.Footer>

        <Button variant="primary" type="submit" onClick={(e)=>updateDetails(e)}> Update </Button>

         <Button onClick={props.onHide}>Close</Button>

        </Modal.Footer>

      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal;