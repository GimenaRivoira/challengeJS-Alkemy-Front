import React, { useEffect, useState } from "react";
import "./Create.css";
import { useForm } from "react-hook-form";
import http from "../../API/http";
import apiServices from "../../API/Services/apiServices";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert'
import axios from "axios";

const Create = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [concept, setConcepto] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [valueid, setValue] = useState("");

  const [ingreso, setIngreso] = useState("1")
  const [egreso, setEgreso] = useState("2")

  const submit = () => {
    axios
      .post("http://localhost:3050/api/create", {
        concept,
        amount,
        date,
        valueid,
      })
      .then((response) => console.log(response), history.push('/'), swal("Operacion agregada con éxito"));
  };
  return (
    <div className="maincardoperation container mt-5">
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
              <div className="form-check">
                <label
                  className="form-check-label text-light"
                  htmlFor="flexRadioDefault1"
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value={ingreso}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  Ingreso
                </label>
              </div>
              <div className="form-check">
                <label
                  className="form-check-label text-light font-weight-bold"
                  htmlFor="flexRadioDefault2"
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value={egreso}
                    checked
                    onChange={(e) => setValue(e.target.value)}
                  />
                  Egreso
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

export default Create;
