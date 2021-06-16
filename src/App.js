import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "DevNation - Payment",
    amount: 5000,
    date: new Date(2021, 6, 7),
  },
  {
    id: "e2",
    title: "HBR Subscription",
    amount: 800,
    date: new Date(2021, 6, 7),
  },
  {
    id: "e3",
    title: "Books from Amazon",
    amount: 1200,
    date: new Date(2021, 6, 7),
  },
  { id: "e4", title: "Tennis Balls", amount: 500, date: new Date(2021, 6, 7) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    //if new state depends on previous state
    setExpenses((expenses) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
};

export default App;
