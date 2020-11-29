import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import 'fomantic-ui-css/semantic.min.css';
import './index.css';
import FormPage from './pages/Form/Form.page';
import IntroPage from './pages/Intro/Intro.page';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<Switch>
				<Route path='/form' component={FormPage} />
				<Route path='/' component={IntroPage} />
			</Switch>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
