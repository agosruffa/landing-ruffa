import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


function ItemListContainer({ greetings }) {
  return (
    <div className="principal">
      <h2>{greetings}</h2>
      <ItemCount />
      <ItemList />
 
    </div>
  );
};


export default ItemListContainer;