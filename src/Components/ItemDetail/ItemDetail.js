
import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';



export const detalledeproductos = [
  {
    id: 1,
    name: 'Preparación física',
    precio: '$1000',
    info:
      'Orientada al fortalecimiento de órganos y sistemas, a la elevación de sus posibilidades funcionales, al mejoramiento y/o desarrollo de las cualidades motoras [fuerza / rapidez / resistencia / flexibilidad – movilidad / y agilidad. .',
  },
];

class ItemDetail extends Component {

  constructor() {
      super();
      this.state = {
        detalle_de_productos: [],
      };
    }

    componentDidMount() {
        this.setState({
          detalle_de_productos: detalledeproductos,
        });
    }

    render() {
        return (
        <div>
          {this.state.detalle_de_productos.map((data) => {
            return (
              <div>
              <h2>Detalle</h2>
                <p>{data.info}</p>
              <h2>Precio</h2>
                <p>{data.precio}</p>
                </div>
            );
          })}
        </div>
        )
  }
}

export default ItemDetail
















/*import React from 'react';
import { Button } from 'semantic-ui-react';

function ItemDetail( { users }) {
  return (
    <div>
      {users.map((user) => {
        return (
        <Button primary>{user.login}</Button>
      );
    })}
    </div>
  );
}

export default ItemDetail;
*/
