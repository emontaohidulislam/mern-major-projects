import axios from "axios";

function App() {
  const placeOrder = async () => {
    await axios.post("http://localhost:5001/api/order", {
      items: ["Burger", "Pizza"],
      total: 550
    });
    alert("Order Placed");
  };

  return (
    <div>
      <h2>Foodiez Pro</h2>
      <button onClick={placeOrder}>Order Food</button>
    </div>
  );
}

export default App;
