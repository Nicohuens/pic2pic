import React from 'react';
import Matrix from './components/drawer/Matrix.js';
import Draw from './components/drawer/Draw.js';
import players from './utils.js';
import PlayersInDrawer from './components/drawer/PlayersInDrawer.js';
import Canvas from './components/drawer/Canvas.js';


console.log(players);

const Game = (props) => (
<div>
   <PlayersInDrawer players={players} />
   <Draw />
</div>
);

export default Game;
