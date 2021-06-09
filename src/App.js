import Expenses from "./components/Expenses";

function App() {
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
    <div>
      <h1>Hello World!</h1>
      <h2>Welcome to Reactjs</h2>
      <Expenses data={expenses} className={expenses} />
    </div>
  );
}

export default App;
