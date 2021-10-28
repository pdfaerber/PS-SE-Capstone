import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import { Route, Switch } from "react-router-dom";
import UpdateExpenseForm from "./components/UpdateExpenseForm";

// import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={ExpenseList}/>
        <Route path="/update-expense" exact component={UpdateExpenseForm}/>
        </Switch>
     
        </div>
  );
};

export default App;
