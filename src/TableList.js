import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import  MyVerticallyCenteredModal from './ModalTask'


import { useSelector, useDispatch } from "react-redux";
import { setselectedItems,removeItems,check } from './SlicePage';


function TableList(){

  const {taskList}= useSelector((state)=>state.tasks)

  const dispatch=useDispatch()

  const updateTask=(task)=>{
      console.log("Task Update");
      setModalShow(true)
      dispatch(setselectedItems(task))
      console.log(task);

  }
  const deleteTask=(task)=>{
    dispatch(removeItems(task))
    console.log("Task Deleted");
  }

  const [modalShow, setModalShow] = useState(false);
  //const [check,setCheck]=useState(true)

  const handleCheckbox=(i)=>{

    let box=taskList && taskList.map((task,index)=>{
      console.log("check box");
      return task.id ===i ? task.check ?{...task,check:false}:{...task,check:true}:task
    })

    console.log(box);
    dispatch(check(box))
  }

  
    return(
        <div>
          <Table striped bordered hover>
            <thead>
              <tr className='table-style'>
                <th>#</th>
                <th>Check box</th>
                <th>List</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {
                taskList && taskList.map((task,index)=>{
                    return(
                                    
                      <tr className='table-style' key={task.id}>
                          <td>{index+1}</td>
                              {
                              !task.check?(
                                  <>
                                  <td>
                                      <input type='checkbox' onClick={()=>handleCheckbox(task.id)}/>
                                  </td>
                                  <td>{task.description}</td>
                                  </>
                              ):
                              (
                                  <>
                                  <td>
                                      <input type='checkbox' onClick={()=>handleCheckbox(task.id)}/>
                                  </td>
                                  <td><del>{task.description}</del></td>
                                  </>
                              )
                          }

                        
                        <td>
                            <Button variant="primary" className='mx-3' onClick={()=>updateTask(task)} >
                                <i className="bi bi-pencil-square"></i>
                            </Button>

                            <Button variant="primary" onClick={()=>deleteTask(task)}>
                                <i className="bi bi-trash3-fill"></i>
                                
                            </Button>
                      
                        </td>
                        </tr>
                      )
                })
              }

              
              <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />

            </tbody>
          </Table>
        </div>
    )
}
export default TableList;