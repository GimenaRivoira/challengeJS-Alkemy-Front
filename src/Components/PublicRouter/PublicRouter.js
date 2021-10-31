import {Link} from 'react-router-dom'


const Publicrouter = () => {
    return (
        <div className="container">
        <div className="row">
          
  
          <div className="card bg-info shadow pt-2 mt-5">
            <div className="card-body bg-light pb-2">
              <div className="row no-gutters align-items-center">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  No puedes editar esta operacion, para poder realizar esta accion es necesario registrarse
                    <div className="d-flex justify-content-center mt-3">
                    <Link to="/registro">
                    <button className="form-control mt-4 w-100 bg-success text-white">Registrarme</button>
                    </Link>
                    </div>
                  </div> 
  
              </div>
            </div>
          </div>
    
  
  
        </div>
      </div>
    );
}

export default Publicrouter;
