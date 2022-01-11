import React, {useState, useContext} from "react";
import { Button, Modal } from 'react-bootstrap';
import { Context } from "../store/appContext";
import Form from '../component/form'
function Example() {
    const { store, actions } = useContext(Context);
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //const [form, setForm] = useState({nombre:'',apellido:''})
    const[nombre, setNombre]=useState('');
    const[apellido, setApellido]=useState('');

  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              
            <Form setNombre={setNombre} setApellido={setApellido}></Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" 
            onClick={ ()=>{
                actions.exampleFunction(nombre,apellido)
                    handleClose()
                }
                }>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default Example;