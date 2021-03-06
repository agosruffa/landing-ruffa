import React, { Component } from 'react'
import './ItemCount.css'
import { Button, Card, Image } from 'semantic-ui-react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

export default class ItemCount extends Component {
    constructor() {
        super(); 

        this.state = {
            count: 0,
        };
    }
    
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
      };
    
      handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
      };
    
    
render() {
return (

<div className="items">     
    <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>Planificación semanal</Card.Header>
            <Card.Meta>$1000</Card.Meta>
            <ItemDetailContainer />
            <h4>Item Count</h4>
            <p>{this.state.count}</p>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
                <Button basic color='green' onClick={this.handleIncrement}>
                Agregar al carrito
                </Button>
                <Button basic color='red' onClick={this.handleDecrement}>
                Borrar
                </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Card.Header>Planificación Mensual</Card.Header>
                <Card.Meta>$2000</Card.Meta>
                <h4>Item Count</h4>
                <p>{this.state.count}</p>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green' onClick={this.handleIncrement}>
                    Agregar al carrito
                    </Button>
                    <Button basic color='red' onClick={this.handleDecrement}>
                    Borrar
                    </Button>
                </div>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Card.Header>Planificación x 3 meses</Card.Header>
                <Card.Meta>$5000</Card.Meta>
                <h4>Item Count</h4>
                <p>{this.state.count}</p>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green' onClick={this.handleIncrement}>
                     Agregar al carrito
                    </Button>
                    <Button basic color='red' onClick={this.handleDecrement}>
                    Borrar
                    </Button>
                </div>
            </Card.Content>
        </Card>
    </Card.Group>
</div>
        )
    }
}

