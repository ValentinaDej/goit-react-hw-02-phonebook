import PropTypes from 'prop-types';

export const ContactList = ({ options, onDeleteClick }) => {
  const data = options();
  return (
    <ul>
      {data.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              type="button"
              onClick={() => {
                onDeleteClick(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.prototypes = {
  ContactList: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
