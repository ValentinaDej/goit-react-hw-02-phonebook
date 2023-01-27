import PropTypes from 'prop-types';

import styles from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ onDeleteClick, contacts }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, nameContact, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            nameContact={nameContact}
            number={number}
            onDeleteClick={onDeleteClick}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.prototypes = {
  onDeleteClick: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nameContact: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
