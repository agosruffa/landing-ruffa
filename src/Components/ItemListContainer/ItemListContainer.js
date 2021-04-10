import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer({ greetings }) {
  return (
    <div className="principal">
      <h2>{greetings}</h2>
      <ItemCount />
    </div>
  );
};


export default ItemListContainer;