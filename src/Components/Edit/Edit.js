import React, {useEffect, useState} from "react";
import {useForm} from 'react-hook-form';
import './Edit.css'
import swal from 'sweetalert'
import axios from "axios";

import { useHistory, useParams} from 'react-router-dom';

const Edit = () => {

  const {id} = useParams()
   const history = useHistory() 

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

const [concept, setConcepto] = useState("");
const [amount, setAmount] = useState("");
const [date, setDate] = useState("");

const [idUser, setId] = useState([])

useEffect(() => {
  axios
  .get('http://localhost:3050/api/' + id)
  .then(response => setId(response.data.data.element.id)).catch(err => console.log(err))
},[])

const submit = () => {
  axios
    .put(`http://localhost:3050/api/edit/${idUser}`, {
      concept,
      amount,
      date
    })
    .then((response) => console.log(response), history.push('/'), swal("Operacion agregada con éxito"));
};

  return (

    <div className="maincardoperation container">
      <h3 className="mt-5">Editar su operacion n°{id}</h3>
      <p>Tiene que editar todos los campos</p>
    <form onSubmit={handleSubmit(submit)}>
      <div className="cardoperation row">
        <div className="col">
          <div className="form-floating">
            <input
             {...register("concepto", {required:true})}
              type="text"
              className="form-control mb-4 mt-5"
              id="floatingInputGrid"
              placeholder="name@example.com"
              onChange={(e) => setConcepto(e.target.value)}
            />
            <label htmlFor="floatingInputGrid">Concepto</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
            {...register("monto", {required:true})}
              type="number"
              className="form-control mb-4 mt-5"
              id="floatingInputGrid"
              placeholder="name@example.com"
              onChange={(e) => setAmount(e.target.value)}
            />
            <label htmlFor="floatingInputGrid">Monto</label>
          </div>
        </div>
        <div className="col-md d-block">
          <div className="form-floating">
            <input
            {...register("fecha", {required:true})}
              type="date"
              className="form-control mb-4 mt-4"
              id="floatingInputGrid"
              placeholder="name@example.com"
              onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="floatingInputGrid">Fecha</label>
          </div>
        </div>

        <div className="col-md">
          <div className="form-floating mt-4">
            <div className="form-check bg-secondary">
              <label
                className="form-check-label text-light bg-secondary"
                htmlFor="flexRadioDefault1"
              >
                El valor de los <b>egresos</b> e <b>ingresos</b> <br/>no se pueden modificar
              </label>
            </div>

          </div>
        </div>
      </div>

      <p className="text-danger">{errors.concepto && errors.monto && errors.fecha?.type === 'required' ? "Datos faltantes o erroneos" : null}</p>

      <div className="d-flex justify-content-center">
        <button className="w-25 form-control">Enviar</button>
      </div>
    </form>
  </div>
  );
};

export default Edit;
