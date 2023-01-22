import PropTypes from 'prop-types';

import Button from 'shared/Button/Button';
import styles from './ContactList.module.css';

export const ContactList = ({ options, onDeleteClick }) => {
  const data = options();
  return (
    <ul className={styles.list}>
      {data.map(({ id, name, number }) => {
        return (
          <li className={styles.listItem} key={id}>
            {name}: {number}
            <Button
              title="Delete"
              type="button"
              onClick={() => {
                onDeleteClick(id);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.prototypes = {
  onDeleteClick: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
