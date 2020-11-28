import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import IntroPage from './pages/Intro/Intro.page';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<Switch>
				<Route path='/form'>
					<div>Dude</div>
				</Route>
				<Route path='/' component={IntroPage} />
			</Switch>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
