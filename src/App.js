import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

//Components
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import Item from './Components/Item/Item';

class App extends Component {
    handleClick = () => {
      alert('Se ha añadido a su carrito');
    };
  
render() {
  return (
    
    <div className="">
      <Header title="ENTRENADOR PERSONAL CERTIFICADO" />
      <Navbar />
      <Item />
      <ItemListContainer 
      greetings="Bienvenidos a nuestra App!" 
      action= {this.handleClick}/>
     
    </div>
  );
}
}
export default App;
