import React from 'react';
import {Switch, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HeroHeader from './components/heroHeaderComp/HeroHeader.js';
import Head from './components/Head.js';
import Game from './components/drawer/Game.js';
import NewGame from './components/newGame/NewGame.js';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      newPlayer : {
        username : '',
        avatar : '',
        points : 0
      }
    };
  }

  render(){
    return (
      <div className="App">
          <Head />
          <Switch>
            <Route exact path='/' component={HeroHeader} />
            <Route path="/game" component={Game} />
            <Route path="/newgame" component={NewGame} />
          </Switch>

          

      </div>

    );
  }
}

export default App;
