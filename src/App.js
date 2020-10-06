import React from 'react';
import Morpion from './componants/morpionIndex.js'
import ReactRouter from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
	return (
	<Router>
		<div>
			<Switch>
  				<Route path="/morpion">
					<Morpion/>
		  		</Route>
			</Switch>
		</div>
	</Router>
  )
}

export default App;
