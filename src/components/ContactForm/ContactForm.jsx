import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import styles from './ContactFofm.module.css';

const ContactForm = ({ onHandleSubmit }) => {
  const labelNameId = nanoid();
  const labelNumberId = nanoid();
  return (
    <form className={styles.ContactForm} onSubmit={onHandleSubmit}>
      <label className={styles.labelForm} htmlFor={labelNameId}>
        Name
        <input
          id={labelNameId}
          className={styles.inputForm}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.labelForm} htmlFor={labelNumberId}>
        Number
        <input
          id={labelNumberId}
          className={styles.inputForm}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={styles.buttontForm} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.prototypes = {
  onHandleSubmit: PropTypes.func,
};
