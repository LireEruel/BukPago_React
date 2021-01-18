import './App.css';
import {
  BrowserRouter as Router, Switch
} from "react-router-dom";
import {observer} from "mobx-react"
import HomeLayout from "./HomeLayout"

const App= observer( (props) => {  
  return (
    <div className="App">
      <Router>
        <HomeLayout>
          <Switch>
            
          </Switch>
        </HomeLayout>
      </Router>
    </div>
  );
}) 

export default App;
