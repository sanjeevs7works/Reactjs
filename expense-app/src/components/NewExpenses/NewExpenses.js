import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpenses = (props) => {
   const expenseFormHandler = (expense) => {
      const expenseData = {
         ...expense,
         id: Math.random(),
      };
      console.log(expenseData);
      console.log('new expense');
   };
   return (
      <div className='new-expense'>
         <ExpenseForm onSaveExpenseForm={expenseFormHandler} />
      </div>
   );
};

export default NewExpenses;
