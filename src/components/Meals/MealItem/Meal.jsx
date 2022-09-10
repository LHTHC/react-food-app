import MealForm from './MealForm';
import classes from './Meal.module.css';

const Meal = (props) => {
  const { name, description, price } = props;
  const priceValue = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceValue}</div>
      </div>
      <div>
        <MealForm />
      </div>
    </li>
  );
};

export default Meal;
