import React, { useState } from "react";
import "./UpdateExpenseForm.css";
import ExpenseServices from "../Services/ExpenseServices";

const UpdateExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //prevents page reload before updates to state

    const expenseData = {
      title: enteredTitle,
      comment: '',
      amount: parseInt(enteredAmount),
      date: new Date(enteredDate).toLocaleString(),
    };
    console.log(expenseData);
    console.log(props);

    try {
      const response = ExpenseServices.updateExpense(props.history.location.state,expenseData);
    } catch (err) {
      console.log(err);
    } 
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Update Expense</button>
      </div>
    </form>
  );
};
export default UpdateExpenseForm;
