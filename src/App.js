import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    
    <div className="">
      <Header title="ENTRENADOR PERSONAL CERTIFICADO" />
      <Navbar />
      <ItemListContainer greetings="Bienvenidos a nuestra App!" />
    </div>
  );
}

export default App;
