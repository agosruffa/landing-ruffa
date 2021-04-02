import './Navbar.css';
import { Button } from 'semantic-ui-react';
import CartWidget from '../CartWidget/CartWidget';

function Navbar(props) {
    return (
      <div className="menu">
        <Button.Group>
          <Button>Home</Button>
          <Button>Servicios</Button>
          <Button>Nosotros</Button>
          <Button>Faq</Button>
          <Button>Contacto</Button>
          <Button>
          <CartWidget />
          </Button>
        </Button.Group>
    </div>
    );
  }
  

  export default Navbar;