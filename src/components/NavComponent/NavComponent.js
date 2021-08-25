import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<React.Fragment>
			<nav>
				<ul>
					<li>
						<Link to='/'>Landing Page</Link>
					</li>
					<li>
						<Link to='/profile'>Profile Page</Link>
					</li>
					<li>
						<Link to='/game'>Game Page</Link>
					</li>
					<li>
						<Link to='/leaderboard'>Leaderboard Page</Link>
					</li>
				</ul>
			</nav>
		</React.Fragment>
	);
}

export default Nav;
