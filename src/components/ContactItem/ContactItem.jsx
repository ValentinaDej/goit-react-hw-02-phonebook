import PropTypes from 'prop-types';

import Button from 'shared/Button/Button';

import styles from './ContactItem.module.css';

const ContactItem = ({ id, nameContact, number, onDeleteClick }) => {
  return (
    <li className={styles.listItem}>
      {nameContact}: {number}
      <Button
        title="Delete"
        type="button"
        onClick={() => {
          onDeleteClick(id);
        }}
      />
    </li>
  );
};

export default ContactItem;

ContactItem.prototypes = {
  id: PropTypes.string.isRequired,
  nameContact: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
