import { useState } from "react";

function AddCategory(props) {
  const [category, setCategory] = useState("");
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category) {
      alert("Enter Category");
      return;
    }
    props.onSubmit(category);
  };
  return (
    <form className="font-mono" onSubmit={handleSubmit}>
      <h1 className="ml-5 mt-5">Enter a category of bills</h1>
      <p className="ml-5">E.g. 'Electricity' or 'Gas' or 'Internet'</p>
      <input
        placeholder="Add category"
        className="mt-10 ml-2 border-2 border-black"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {" "}
        Add Category
      </button>
    </form>
  );
}

export default AddCategory;
