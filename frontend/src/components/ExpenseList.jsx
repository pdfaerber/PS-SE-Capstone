import React, { useState, useEffect } from "react";
import ExpenseServices from "../Services/ExpenseServices";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import NewExpense from "./NewExpense/NewExpense";
import "./ExpenseItem.css";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const [expenseList, setExpenseList] = useState([]);
  
  useEffect(()=>{
    const fetchExpenses = async ()=> {
      try{
          const response = await ExpenseServices.getExpenses();
          setExpenseList(response.data);    
      } catch (err) {console.log(err)}
    }
    fetchExpenses();
  },[])

  const filterChangeHandler = (yearSelected) => {
    console.log("ExpenseList.jsx");
    setFilteredYear(yearSelected);
    console.log(yearSelected);
  };

  console.log(props);

  return (
    <div>
       <NewExpense />
      <Card className="expenses">
        <h2>Expense App - Let's get it started!</h2>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseList && expenseList.map((expense) => (
          <ExpenseItem
            {...props}
            onChangeExpense={props.addExpenseHandler}
            key = {expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default ExpenseList;
