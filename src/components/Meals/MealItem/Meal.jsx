import { useContext } from 'react';
import MealForm from './MealForm';
import classes from './Meal.module.css';
import CartContext from '../../../store/cart-context';

const Meal = (props) => {
  const cartCtx = useContext(CartContext);
  const { name, description, price } = props;
  const priceValue = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceValue}</div>
      </div>
      <div>
        <MealForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Meal;
