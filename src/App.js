import Expenses from './components/Expenses/Expenses';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

function App() {
  const DUMMY_EXPENSES = [
    { id: 'e1', title: 'Toilet paper', amount: 294.17, date: new Date(2021, 2, 28) },
    { id: 'e2', title: 'New TV', amount: 294.67, date: new Date(2021, 5, 28) },
    { id: 'e3', title: 'Car Insurance', amount: 234.0, date: new Date(2021, 7, 28) },
    { id: 'e4', title: 'New Desk', amount: 94.67, date: new Date(2022, 12, 28) }
  ]

  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
     //setExpense([expense, ...expenses]);   //   چون در اینجا به دیتای قبلی وابستگی داریم نباید بدین شکل استفاده کنیمو باید به صورت فانکشن فراخوانی کنیم
    setExpense((prevExpenses) =>{
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
