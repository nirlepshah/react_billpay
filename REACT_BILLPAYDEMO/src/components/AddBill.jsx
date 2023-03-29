import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddBill(props) {
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState(props.categories[0]);
  const [date, setDate] = useState(new Date());
  const handleChange = (e) => {
    let newAmount = parseInt(e.target.value, 10);
    if (isNaN(newAmount)) {
      newAmount = "";
    }
    setAmount(newAmount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) {
      alert("enter amount");
      return;
    }
    props.onSubmit(amount, category || props.categories[0], date);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h1>Add a new Bill</h1>
      <input
        placeholder="Add category"
        // value={amount}
        onChange={handleChange}
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        {props.categories
          ? props.categories.map((value, index) => {
              return (
                <option key={index} value={value}>
                  {value}
                </option>
              );
            })
          : ""}
      </select>
      <DatePicker selected={date} onChange={handleDate}></DatePicker>
      <button>Add</button>
    </form>
  );
}

export default AddBill;
