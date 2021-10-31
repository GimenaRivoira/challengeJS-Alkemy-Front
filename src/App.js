import './App.css';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Index from './Pages/Index';

import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom';
import Register from './Pages/Register';
import Create from './Pages/Creacion';
import Edit from './Components/Edit/Edit';
import Delete from './Components/Delete/Delete';
import Publicrouter from './Components/PublicRouter/PublicRouter';

function App() {
  const [token, setToken] = useState(null)
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
<Switch>

  <Route path='/' exact>
    <Index />
  </Route>

  <Route path="/registro" exact>
  <Register />
  </Route>

  <Route path="/create" exact>
  <Create />
  </Route>

  <Route path="/edit/:id" exact>
  <Edit />
  </Route>

  <Route path="/remove/:id" exact>
  < Delete />
  </Route>

  <Route path="/private" exact>
  <Publicrouter />
  </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
