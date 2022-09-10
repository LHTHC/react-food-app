import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Food, delivered to You</h2>
      <p>
        Choose you favourite meal from our broad selection of available
        meals and enjoy a delicious lunch or dinner at home/
      </p>
      <p>
        All of our meals are cooked with hight-quality ingridients, just in
        time and by experienced chiefs!
      </p>
    </section>
  );
};

export default MealsSummary;
