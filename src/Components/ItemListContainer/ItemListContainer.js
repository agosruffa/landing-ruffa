import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer({ greetings, action }) {
  return (
    <div className="principal">
      <h2>{greetings}</h2>
      <ItemCount />
    </div>
  );
};


export default ItemListContainer;