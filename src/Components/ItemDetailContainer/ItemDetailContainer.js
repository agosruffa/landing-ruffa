import React, { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import image from '../ItemDetailContainer/entrenamiento-mensual.png';

function ItemDetailContainer() {
    const [open, setOpen] = React.useState(false)
  
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button basic color='grey' content='Grey'>Ver Más</Button>}
      >
        <Modal.Header>Planificacion Semanal</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src={image} wrapped />
          <Modal.Description>
            <Header><ItemDetail /></Header>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Cerrar
          </Button>
          <Button
            content="Agregar al carrito"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    )
  }
  
  export default ItemDetailContainer;













/*export const Pokemon = () => {
  const [flag, setFlag] = useState(false);
  const [pokemon, setPokemon] = useState(null);


  // componentDidUpdate();
  useEffect(() => {
    console.log("render");
  })

  const handleButton = () => {
    setFlag(!flag);
  }

  return (
    <div>
      <button onClick={handleButton}>
        {
          flag 
            ? 'Ver Menos'
            : 'Ver Más'
        }
      </button>
      {/**
       * if's ternarios
       * condicion ? true : null
       * condicion && true
       */
    /*  
    }
      {
        flag === true && <ItemDetail />
      }
      
    </div>
  );
};
*/








/*import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
  // State y funcion modificadora del state
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data)); // ASIGNAR AL STATE ORIGINA VACIO, LA DATA QUE RECIBIMOS DE LA PETICION ASYNC
  }, []); // LE PASAMOS UN ARRAY VACIO PARA QUE NO LOOPEE DE FORMA INFINITA

  return (
    <div className="">
      <h1>CardContainer</h1>
      <ItemDetail users={users}/>
    </div>
  );
}

export default ItemDetailContainer;*/
