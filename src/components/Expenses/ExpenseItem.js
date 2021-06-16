import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [object, setObject] = useState({
    title: props.title,
    payment: 5000,
  });

  const titleChangeHandler = () => {
    console.log("Button Click");
    const newObject = { ...object, title: "updated title" };
    setObject(newObject);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{object.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={titleChangeHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
