import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import './index.css';
import { Home } from './scenes/Home';
import { StructuralAdaptations } from './scenes/StructuralAdaptations';
import { BehavioralAdaptations } from './scenes/BehavioralAdaptations';
import { PhysiologicalAdaptations } from './scenes/PhysiologicalAdaptations';
import { Specifics } from './scenes/Specifics';
import { InterestingFacts } from './scenes/InterestingFacts';
import { Extras } from './scenes/Extras';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path='/extras'>
					<Extras />
				</Route>
				<Route path='/interesting-facts'>
					<InterestingFacts />
				</Route>
				<Route path='/specifics'>
					<Specifics />
				</Route>
				<Route path='/physiological-adaptations'>
					<PhysiologicalAdaptations />
				</Route>
				<Route path='/behavioral-adaptations'>
					<BehavioralAdaptations />
				</Route>
				<Route path='/structural-adaptations'>
					<StructuralAdaptations />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
