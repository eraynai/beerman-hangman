import './App.css';
import GamePage from './pages/GamePage/GamePage';
import HighScorePage from './pages/HighScorePage/HighScorePage';
import LandingPage from './pages/LandingPage/LandingPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Nav from './components/NavComponent/NavComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Nav />
				{/* <nav>
					<ul>
						<li>
							<Link to='/'>Landing Page</Link>
						</li>
						<li>
							<Link to='/profile'>Profile</Link>
						</li>
					</ul>
				</nav> */}
				<Switch>
					<Route exact path='/'>
						<LandingPage />
					</Route>
					<Route path='/profile'>
						<ProfilePage />
					</Route>
					<Route path='/game'>
						<GamePage />
					</Route>
					<Route path='/leaderboard'>
						<HighScorePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
