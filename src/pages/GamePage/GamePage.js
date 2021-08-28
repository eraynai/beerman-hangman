import React from 'react';
import Header from '../../components/Header/Header';
import Figure from '../../components/Figure/Figure';
import WrongLetters from '../../components/WrongLetters/WrongLetters';
import Word from '../../components/Word/Word';

const GamePage = () => {
	return (
		<>
			<Header />
			<div className='game-container'>
				<Figure />
				<WrongLetters />
				<Word />
			</div>
		</>
	);
};

export default GamePage;
