import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealForm.module.css';

const MealForm = (props) => {
  const [amountIsVaild, setAmountIsVaild] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountAsNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountAsNum < 1 ||
      enteredAmountAsNum > 6
    ) {
      setAmountIsVaild(false);
      return;
    }

    props.onAddToCart(enteredAmountAsNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        type="text"
        label={'Amount'}
        ref={amountInputRef}
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsVaild && <p>Please enter a valid amount (1-6)</p>}
    </form>
  );
};

export default MealForm;
