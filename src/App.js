import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      title: "DevNation - Payment",
      amount: 5000,
      date: new Date(2021, 6, 7),
    },
    {
      id: 1,
      title: "HBR Subscription",
      amount: 80,
      date: new Date(2021, 6, 7),
    },
    {
      id: 1,
      title: "Books from Amazon",
      amount: 120,
      date: new Date(2021, 6, 7),
    },
    { id: 1, title: "Tennis Balls", amount: 50, date: new Date(2021, 6, 7) },
  ];

  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Welcome to Reactjs</h2>

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

export default App;
