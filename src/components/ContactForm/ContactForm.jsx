import PropTypes from 'prop-types';

import Button from 'shared/Button/Button';
import LabelInput from 'shared/LabelInput/LabelInput';
import styles from './ContactFofm.module.css';

const ContactForm = ({ onHandleSubmit }) => {
  return (
    <form className={styles.ContactForm} onSubmit={onHandleSubmit}>
      <LabelInput
        caption="Name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required="required"
      />
      <LabelInput
        caption="Number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required="required"
      />
      <Button title="Add contact" type="submit" />
    </form>
  );
};

export default ContactForm;

ContactForm.prototypes = {
  onHandleSubmit: PropTypes.func,
};
