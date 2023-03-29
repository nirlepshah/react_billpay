function NavBar(props) {
  const handleChange = () => {
    props.showAddCategory();
  };
  return (
    <ul className="font-mono font-bold text-xl mt-5">
      {props.categories ? (
        props.categories.map((value, index) => {
          return (
            <li className="ml-5" key={index}>
              {value}
            </li>
          );
        })
      ) : (
        <li>No Categories</li>
      )}
      <li className="ml-5 mt-5" onClick={handleChange}>
        ➕ Click to "+" to Add Category
      </li>
    </ul>
  );
}

export default NavBar;
