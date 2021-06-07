import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses() {
  const expenses = [
    {
      id: 1,
      title: "DevNation - Payment",
      amount: 5000,
      date: new Date(2021, 6, 7),
    },
    {
      id: 2,
      title: "HBR Subscription",
      amount: 4000,
      date: new Date(2021, 6, 7),
    },
    {
      id: 3,
      title: "Books from Amazon",
      amount: 1200,
      date: new Date(2021, 6, 7),
    },
    { id: 4, title: "Tennis Balls", amount: 5000, date: new Date(2021, 6, 7) },
  ];
  return (
    <div className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}