import React from 'react';
import Pix from './Pix.js'

class MatrixInit extends React.Component {
  render(){
    const taille = 16;

    let matrix = new Array(taille);
    let array = new Array(taille);

    for (let j = 0; j < taille ; j++){
      array[j] = <Pix boolean={false} color={this.state.padcolor}/>;
    }

    const arrayMod = <div className="array"> {array} </div>;

    for(let i = 0 ; i < taille ; i ++){
      matrix.push(arrayMod);
    }

    return <div className="matrix"> {matrix} </div>
  }

}

export default MatrixInit;
