import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setDisplayForm(false);
  };

  const cancelExpenseForm = () => {
    setDisplayForm(false);
  };

  const addNewExpenseHandler = () => {
    setDisplayForm(true);
  };

  let displayContent;
  if (displayForm) {
    displayContent = (
      <ExpenseForm
        onCancelExpenseForm={cancelExpenseForm}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  } else {
    displayContent = (
      <button type="button" onClick={addNewExpenseHandler}>
        Add new expense
      </button>
    );
  }

  return <div className="new-expense">{displayContent}</div>;
};

export default NewExpense;
