import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const Filter = ({ handleChange }) => {
  const labelFilterId = nanoid();
  return (
    <label htmlFor={labelFilterId}>
      Find contacts by name
      <input
        id={labelFilterId}
        type="text"
        name="filter"
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;

Filter.prototypes = {
  handleChange: PropTypes.func,
};
