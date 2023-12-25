import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { addItems } from "./SlicePage";
import { useDispatch } from "react-redux";


function AddTask(){

    const dispatch=useDispatch()

    // const [check,setCheck]=useState("")
    const[description,setDescription]=useState("")

    const addTask=(e)=>{
        e.preventDefault()
        console.log(description);

        dispatch(addItems({description}))
        setDescription("")
    }

    return(
        <div>
            <section className="my-4">
                <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Items</Form.Label>
                        <Form.Control type="text" placeholder="Enter Items" 
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}

                        />
                    </Form.Group>


                    <Button variant="primary" type="submit" onClick={(e)=>addTask(e)}>
                        Add Items
                    </Button>
                </Form>
            </section>

        </div>
    )
}
export default AddTask;