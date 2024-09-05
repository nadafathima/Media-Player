import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory } from '../Services/allAPIs';
import { toast } from 'react-toastify';
import Categorylist from './Categorylist';

function Category() {
    const [show, setShow] = useState(false);
    const [category,setCategory]=useState({
      categoryId:"",title:"",videos:[]
    })
    const [addResponse,setAddResponse]=useState("")

    const handleCategory = async ()  =>{
      console.log(category);
      const {categoryId,title}=category
      if(!categoryId || !title){
        toast.warning("Enter valid inputs")
      }
      else{
        const result=await addCategory(category)
        console.log(result);
        if(result.status==201){
          toast.success("Category Added!!")
          handleClose()
          setCategory({
            categoryId:"",title:"",videos:[]
          })
          setAddResponse(result)

        }
        else{
          toast.error("Category adding failed!!")
        }
      }
    } 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-grid'>
     <Button variant="success" onClick={handleShow}>
        Add Category
      </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="catgryid" label="Category ID" className="mb-3">
        <Form.Control type="number" placeholder="id" onChange={(e)=>{setCategory({...category,categoryId:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel controlId="catgryname" label="Category Name">
        <Form.Control type="text" placeholder="name"  onChange={(e)=>{setCategory({...category,title:e.target.value})}} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleCategory}>Save</Button>
        </Modal.Footer>
      </Modal>
      <Categorylist response={addResponse}/>
    </>
  )
}

export default Category
