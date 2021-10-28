import React, {useState} from "react";
import ExpenseServices from "../Services/ExpenseServices";
import UpdateExpenseForm from "./UpdateExpenseForm";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //hooks must only be called inside component functions
  const [title, setTitle] = useState(props.title);//always returns an array with 2 elements
  const [update, setUpdate] = useState(false);
  //function that changes the title of our expense item
  

  

  return (
    <Card className="expense-item" key = {props.id}>
      {/* <ExpenseDate date={props.date} /> */}

      <div className="expense-item__description">
        {props.date}
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={()=>props.history.push({pathname: '/update-expense', state: props.id})}>Update</button>
      <button onClick={()=>ExpenseServices.deleteExpense(props.id)}>delete</button>
    </Card>
  );
};
export default ExpenseItem;
