import React, { Component } from 'react';
import './Item.css'; 
import { Header, Segment } from 'semantic-ui-react';

export const ciclosDeVida = [
    {
      id: 1,
      name: 'Preparación física',
      info:
        'Orientada al fortalecimiento de órganos y sistemas, a la elevación de sus posibilidades funcionales, al mejoramiento y/o desarrollo de las cualidades motoras [fuerza / rapidez / resistencia / flexibilidad – movilidad / y agilidad. .',
    },
    {
      id: 2,
      name: 'Preparación Física General',
      info:
        'Destinada a la adquisición de un desarrollo físico multilateral y se caracteriza por una gran fuerza, rapidez, flexibilidad y agilidad una buena capacidad de trabajo de todos los órganos y sistemas y la armonía de sus funciones y movimientos deportivos.',
    },
    {
      id: 3,
      name: 'Preparación Física Fundamental o Básica',
      info:
        'Tiene como objetivo elevar en la medida que sea posible para cada determinada etapa de la preparación el nivel de las cualidades motoras [fuerza / rapidez / resistencia / flexibilidad y agilidad] y las posibilidades funcionales del organismo en vinculación estrecha con las cualidades motrices básicas de la modalidad deportiva que se practique.',
    },
  ];

class Item extends Component {

    constructor() {
        console.log('Constructor');
        super();
        this.state = {
          ciclos_de_vida: [],
        };
      }

      componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {
          this.setState({
            ciclos_de_vida: ciclosDeVida,
          });
        }, 2000);
      }

      render() {
          return (
          <div>
              <ul>
            {this.state.ciclos_de_vida.map((data) => {
              return (
              <li className="detalles">              
                <Header as='h5' attached='top'>{data.name}</Header>
                <Segment attached>{data.info}</Segment>
              </li>
              );
            })}
            </ul>
          </div>
          )
    }
  }

    export default Item; 