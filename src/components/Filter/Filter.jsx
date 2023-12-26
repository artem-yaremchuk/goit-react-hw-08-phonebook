import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filter/slice";
import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div className={css.filterForm}>
      <label htmlFor="inputFilter" className={css.filterLabel}>Find contacts by name:</label>
        <input
          type="text"
          className={css.filterInput}
          id="inputFilter"
          onChange={handleChange}
          placeholder="Search..."
        />
    </div>
  );
};

export default Filter;
