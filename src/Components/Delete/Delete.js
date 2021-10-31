import React, {useEffect, useState} from "react";
import {useForm} from 'react-hook-form';
import swal from 'sweetalert'
import axios from "axios";

import { useHistory, useParams} from 'react-router-dom';

const Delete = () => {

    const {id} = useParams()
    const history = useHistory() 
 
 const {
   register,
   handleSubmit,
   formState: { errors },
 } = useForm();
 
    const [idUser, setId] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:3050/api/' + id)
        .then(response => setId(response.data.data.element.id)).catch(err => console.log(err))
      },[])

      
      const eliminar = () => {
        axios
          .delete(`http://localhost:3050/api/remove/${idUser}`)
          .then((response) => console.log(response), history.push('/'))
      };

      const cancelar = () => {
          history.push('/')
      }

    return (
        <div className="container">
      <div className="row">
        

        <div className="card bg-info shadow pt-2 mt-5">
          <div className="card-body bg-light pb-5">
            <div className="row no-gutters align-items-center">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  ¿Estás seguro/a de querer eliminar la operacion n° {idUser}?
                  <div className="d-flex justify-content-center mt-3">
                      
                  <button className="form-control mt-4 w-25 m-4 bg-danger text-white" onClick={cancelar}>Cancelar</button>
                  <button className="form-control mt-4 w-25 m-4 bg-success text-white" onClick={eliminar}>Aceptar</button>
                  </div>
                </div> 

            </div>
          </div>
        </div>
  


      </div>
    </div>
    );
}

export default Delete;
