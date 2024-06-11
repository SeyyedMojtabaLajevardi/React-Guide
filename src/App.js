import ExpenseItem from './components/ExpenseItem';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import Expenses from './components/Expenses/Expenses';
import logo from './logo.svg';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { id: 'e1', title: 'Toilet paper', amount: 294.17, date: new Date(2021, 2, 28) },
    { id: 'e2', title: 'New TV', amount: 294.67, date: new Date(2021, 5, 28) },
    { id: 'e3', title: 'Car Insurance', amount: 234.0, date: new Date(2023, 7, 28) },
    { id: 'e4', title: 'New Desk', amount: 94.67, date: new Date(2024, 12, 28) }
  ]

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
