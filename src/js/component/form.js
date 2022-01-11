import React, {useEffect} from "react";
import PropTypes from 'prop-types';

const Form =(props)=>{

    return<>
   
    <input type='text' placeholder='nombre' onChange={(e)=>{props.setNombre(e.target.value)}}/>
    
    <input type='text' placeholder='apellido' onChange={(e)=>{props.setApellido(e.target.value)}}/>
    </>
}
Form.propTypes = {
    setNombre: PropTypes.any,
    setApellido: PropTypes.any
  };
export default Form;