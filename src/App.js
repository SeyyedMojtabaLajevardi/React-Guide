import ExpenseItem from './components/ExpenseItem';
import logo from './logo.svg';
import './App.css';

function App() {
const expenses = [
  {id:'e1', title:'Toilet paper', amount:294.17, date:new Date(2021, 2, 28)},
  {id:'e2', title:'New TV', amount:294.67, date:new Date(2021, 5, 28)},
  {id:'e3', title:'Car Insurance', amount:234.0, date:new Date(2023, 7, 28)},
  {id:'e4', title:'New Desk', amount:94.67, date:new Date(2024, 12,  28)}
]

  return (
    <div>
      <h2>Lets get starts... </h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}> </ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}> </ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}> </ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}> </ExpenseItem>
    </div>
  );
}

export default App;
