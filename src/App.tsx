import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//redux
//import { createStore } from 'redux';

//routs
import { routes } from './routs';


function App() {

  return (
      <Router>
        <Switch>
          {routes.map((route, index)=> {
            return <Route {...route}  key={index}/>
          })
          }
        </Switch>
      </Router>
  );
}

export default App;
