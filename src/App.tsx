import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//routs
import { routes } from './routs';

//styles
import './assets/reset.css';
import './assets/base.css';

function App() {
    return (
        <Router>
            <Switch>
                {routes.map((route, index) => {
                    return <Route {...route} key={index} />;
                })}
            </Switch>
        </Router>
    );
}

export default App;
