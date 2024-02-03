import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//These are diiferent files, and we use the router on the bottom to access them.
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUsers from"./components/create-users.component";

function App() {
  return (
    <Router>
      <div className='container'>
     <Navbar/>
      <br/>
      <Route path="/" exact component={ExercisesList}/>
      <Route path="/edit/:id"  component={EditExercise}/>
      <Route path="/create"  component={CreateExercise}/>
      <Route path="/user"  component={CreateUsers}/>
      </div>
    </Router>
  );
}


export default App;
