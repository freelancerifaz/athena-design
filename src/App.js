import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home/Home';

function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
