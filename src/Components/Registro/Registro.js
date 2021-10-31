import React,{useState, useEffect} from "react";
import { Link,useHistory } from "react-router-dom";
import "./Registro.css";
import axios from 'axios';
import swal from 'sweetalert'
import { useForm } from "react-hook-form";

const Registro = () => {

  const history = useHistory()
  
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const [user, setUser] = useState([])

  const {register, handleSubmit, formState: {errors}} = useForm()
/*   const submit = () => {
      axios.post('http://localhost:3050/user/register',{
        email,
        password
      })
      .then(response => localStorage.setItem('token',response.data.token), history.push('/'), swal("¡Bienvenido/a!", "Usuario registrado con éxito", "success"))
      .catch( err => console.log(err), history.push('/registro'),swal('Ocurrio un error al querer registrarse'))
    } */

    const registrar = async () => {
      try {
        const user = await axios.post('http://localhost:3050/user/register',{
          email,
          password,   
        })
        setUser(user)
        swal("¡Bienvenido/a!", "Usuario registrado con éxito", "success")
        localStorage.setItem('token',user.data.token)
      } catch (error) {
        swal('Ocurrio un error al querer registrarse')
      }
    }



  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="tarjetaregistro card bg-light shadow">
        <h2 className="mt-5 text-info">Registro</h2>
          <p className="text-dark">Bienvenido al sitio,</p>
      
        <form onSubmit={handleSubmit(registrar)}>
          
          <label className="labeluser">Correo electronico:</label>
          <input
          {...register("email", {required:true})}
            className="inputarjetalog"
            placeholder="Correo electronico"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="labeluser">Contraseña:</label>
          <input
           {...register("password", {required:true})}
            className="inputarjetalog"
            placeholder="Contraseña"
            type="password"
            onChange={(e) => setPass(e.target.value)}
          />
          <p className="text-danger">{errors.email && errors.password?.type === 'required' ? "Datos faltantes o erroneos" : null}</p>

          <input className=" w-50 bg-info text-dark mt-4" type="submit" />

        </form>
      
      </div>
    </div>

  );
};

export default Registro;
