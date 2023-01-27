import { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', nameContact: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', nameContact: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', nameContact: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', nameContact: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ nameContact, number }) => {
    if (this.checkUniqueData(nameContact)) {
      alert(`${nameContact} is already in contacts.`);
      return false;
    }

    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(),
        nameContact,
        number,
      };

      return { contacts: [newContact, ...contacts] };
    });
    return true;
  };

  checkUniqueData(nameContact) {
    const normalizedName = nameContact.toLowerCase();
    const { contacts } = this.state;

    const result = contacts.find(({ nameContact, number }) => {
      return nameContact.toLocaleLowerCase() === normalizedName;
    });

    return Boolean(result);
  }

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== contactId);
      return { contacts: newContacts };
    });
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }

    const normmalizedFilter = filter.toLocaleLowerCase();
    const result = contacts.filter(({ nameContact, number }) => {
      return nameContact.toLocaleLowerCase().includes(normmalizedFilter);
    });

    return result;
  }

  render() {
    const { addContact, handleFilter, deleteContact } = this;
    const contacts = this.getFilteredContacts();

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section title="Contacts">
          <Filter handleChange={handleFilter} />
          <ContactList onDeleteClick={deleteContact} contacts={contacts} />
        </Section>
      </>
    );
  }
}
