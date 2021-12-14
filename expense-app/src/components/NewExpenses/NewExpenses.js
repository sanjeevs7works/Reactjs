import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpenses = (props) => {
   return (
      <div className='new-expense'>
         <ExpenseForm />
      </div>
   );
};

export default NewExpenses;
