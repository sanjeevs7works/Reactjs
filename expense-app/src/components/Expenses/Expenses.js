import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
const Expenses = (props) => {
   const [selectedYear, setSelectedYear] = useState('2022');
   const onExpenseChangeHandler = (selectedYear) => {
      setSelectedYear(selectedYear);
      console.log(selectedYear);
   };
   return (
      <div>
         <Card className='expenses'>
            <ExpensesFilter
               selected={selectedYear}
               onExpenseChange={onExpenseChangeHandler}
            />
            <ExpenseItem item={props.items[0]} />
            <ExpenseItem item={props.items[1]} />
            <ExpenseItem item={props.items[2]} />
            <ExpenseItem item={props.items[3]} />
         </Card>
      </div>
   );
};

export default Expenses;
