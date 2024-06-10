import './ExpenceDate.css';
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const Year = props.date.getFullYear();


    return (
        <div>
            <div className='expense-date__month' >{month}</div>
            <div className='expense-date__year'>{Year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;