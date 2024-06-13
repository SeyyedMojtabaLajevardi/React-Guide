import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpensesFilter'
import ExpensesList from "./ExpensesList"
import './Expenses.css'
import Card from "../UI/Card"
import React, { useState } from "react"
import ExpensesChart from './ExpensesChart.'




const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filteredExpense = props.items.filter(exp => {
        const year = exp.date.getFullYear().toString();
        const result = year === filteredYear;
        return result;
    });

    const filteredChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onSetFilter={filteredChangeHandler} />
                <ExpensesChart expenses = {filteredExpense}/>
                <ExpensesList items = {filteredExpense} />
            </Card>
        </div>
    )
}
export default Expenses