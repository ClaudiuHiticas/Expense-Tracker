import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem({ expense }) {
  // const [title, setTitle] = useState(expense.title);

  return (
    <Card className='expense-item'>
      <ExpenseDate date={expense.date} />
      <div className='expense-item__description'>
        <h2>{expense.title}</h2>
        <div className='expense-item__price'>${expense.amount}</div>
      </div>
      {/* <button onClick={() => setTitle(title + "!")} >Update Title!</button> */}
    </Card>
  );
}

export default ExpenseItem;
