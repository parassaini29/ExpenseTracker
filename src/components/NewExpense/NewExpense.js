/** @format */

import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState();
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData); //lifting state up
    setIsEditing(false);
  };
  const closedEditingHandler = () => {
    setIsEditing(false);
  };
  const staretdEditingHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={staretdEditingHandler}>Add new expense.</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={closedEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
