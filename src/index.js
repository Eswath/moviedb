import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Routingpage from './Routingpage'

ReactDOM.render(
	<Router>
	<div>
	<Route exact path={"/"} component={App} />
	<Route path= {"/Routingpage"} component={Routingpage} parentpath={"/"}/>
	</div>
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
