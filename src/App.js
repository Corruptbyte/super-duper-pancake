import './App.css';
// import Item from './MyItem'


import React from 'react';
class Pokemon extends React.Component {

    constructor() {

   super()

 this.state = {

    loadedCharacter: false,
   name: null,
  height: null,
 species: null,
moves: [],

     }
  }
      getNewCharacter() {


  console.log("Get new character from a button")
      

     this.setState({


  name: 'Charizard',
  height: 170,
  species: 'salamander',
  moves: [],
  loadedCharacter: true,


      })

    }


    render() {
    return (
    <div>

{

       this.state.loadedCharacter &&

     <div>

<h1>{this.state.name}</h1>
<p>{this.state.height} cm</p>
<p>{this.state.species}:</p>
 <ul>
   <li>{this.state.moves}</li>
 </ul>
</div>
       }


<button type="button" onClick={() => this.getNewCharacter()}className="btn">Randomized character</button>
     )
    }
  }

     function App() {
  

        return (
      <div className="App">
      
<header className="App-header">

      <Pokemon />
      
        
    
      </header>
    </div>
  );
}
export default App;
