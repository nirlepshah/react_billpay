import AddBill from "./components/AddBill";
import AddCategory from "./components/AddCategory";
import BillsTable from "./components/BillsTable";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(false);
  const [categories, setCategories] = useState([]);
  const [bills, setBills] = useState([]);
  const [shouldShowAddBill, setshouldShowAddBill] = useState(false);

  const addCategory = (category) => {
    const updatedCategories = [...(categories || []), category];
    setCategories(updatedCategories);
    setShouldShowAddCategory(false);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  const showAddCategory = () => {
    setShouldShowAddCategory(true);
  };

  const showAddBill = () => {
    setshouldShowAddBill(true);
  };

  const addBill = (amount, category, date) => {
    const bill = { amount, category, date };
    const updatedBills = [...(bills || []), bill];
    setBills(updatedBills);
    setshouldShowAddBill(false);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
  };
  const removeBill = (index) => {
    let updatedBills = [...bills];
    updatedBills = updatedBills
      .slice(0, index)
      .concat(updatedBills.slice(index + 1, updatedBills.length));
    setBills(updatedBills);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
  };
  useEffect(() => {
    const categoriesInLocalStorage = JSON.parse(
      localStorage.getItem("categories")
    );

    const billsInLocalStorage = JSON.parse(localStorage.getItem("bills"));
    if (categoriesInLocalStorage !== categories) {
      setCategories(categoriesInLocalStorage);
    }
    if (!categoriesInLocalStorage) {
      setShouldShowAddCategory(true);
    }

    if (!billsInLocalStorage) {
      setshouldShowAddBill(true);
    }
  }, []);

  return (
    <div>
      {shouldShowAddCategory ? (
        <AddCategory onSubmit={addCategory} />
      ) : shouldShowAddBill ? (
        <AddBill onSubmit={addBill} categories={categories} />
      ) : (
        <div>
          <NavBar categories={categories} showAddCategory={showAddCategory} />
          <BillsTable
            bills={bills}
            showAddBill={showAddBill}
            removeBill={removeBill}
          />
          {console.log(bills)}
        </div>
      )}
    </div>
  );
}

export default App;
