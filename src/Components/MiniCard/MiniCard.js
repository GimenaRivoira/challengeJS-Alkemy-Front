import React, {useEffect, useState} from "react";
import http from '../../API/http';
import axios from "axios";

const Card = () => {
  const [operation, setOperation] = useState([])

  useEffect(() => {
    axios
    .get('http://localhost:3050/api')
    .then(response => setOperation(response.data.data)).catch(err => console.log(err))
 },[])

  return (
    <div className="container">
      <div className="row">
        
    
      <div className="col md-5 mb-4 mt-4">
        <div className="card bg-info shadow h-100 pt-2 pl-2">
          <div className="card-body bg-light">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
              
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Cantidad de productos agregados:
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{operation.length}</div>            
              </div>
              <div className="col-auto">
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>


      </div>
    </div>
  );
};

export default Card;
