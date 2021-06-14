
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import NavigationBar from './components/NavigationBar/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App font-roboto">
        <NavigationBar></NavigationBar>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/form">
              <Form></Form>
            </Route>
            <Route path="/">
              <div>Not found</div>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
