import React, {useState, useEffect, useLayoutEffect} from "react";
import "./Card.css";
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

const Card = () => {
  const [token ,setToken] = useState(null)

  useEffect(() => {
   setToken(localStorage.getItem('token'))
  }, []);

  const [operation, setOperation] = useState([])
  const [idUsuario, setIdUsuario] = useState([])

  const {id} = useParams()

  useEffect(() => {
    axios
    .get('http://localhost:3050/api')
    .then(response => setOperation(response.data.data)).catch(err => console.log(err))
 },[])

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">

        {
          operation.map((data) => (



        <div className="card tarjetamain border border-info" style={{width: "18rem"}}>
        
          <h5 className="bg-light pb-2 tarjetaoption text-dark mt-2">{data.value.type}</h5>    
          <div className="card-body">
            <h5 className="card-title">{data.concept}</h5>
            <hr/>
            <h5 className="card-title mb-2">${data.amount}</h5>
            <h5 className="card-title mb-2">{data.date}</h5>
          </div>

          <div>  
              
          { token !== null ?
            <Link to={`/edit/${data.id}`}>
            <button className="maincardbutton form-control">
              Editar
            </button>
            </Link>
:  <Link to={`/private`}>
<button className="maincardbutton form-control">
  Editar
</button>
</Link>}

{ token !== null ?
            <Link to={`/remove/${data.id}`}>
            <button className="maincardbutton form-control" >
              Eliminar
            </button>
            </Link>
: <Link to={`/private`}>
<button className="maincardbutton form-control">
  Editar
</button>
</Link>}
    
            
          </div>
        </div>

))
}


      </div>
    </div>
  );
};

export default Card;
