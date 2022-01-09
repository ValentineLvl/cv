import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import selectedProject from './reducers/selectedProject';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ProjectDetails from './pages/Project';
import NotFound from './pages/NotFound';

const store = createStore(combineReducers({selectedProject}))

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Portfolio} path="/portfolio" exact />
        <Route component={ProjectDetails} path="/projet" exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
