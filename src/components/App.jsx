import { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onHandleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();

    const uniqueData = !this.checkUniqueData(this.state.contacts, name);

    if (uniqueData) {
      this.setState(({ contacts }) => ({
        contacts: [{ id, name, number }, ...contacts],
      }));
      form.reset();
    } else {
      alert(name + ' is already in your contscts');
    }
  };

  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  filteredData = () => {
    const data = this.state.contacts;
    return data.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  checkUniqueData(data, nameCheck) {
    return data.find(
      ({ name }) => name.toLowerCase() === nameCheck.toLowerCase()
    );
  }

  onDeleteClick = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onHandleSubmit={this.onHandleSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter handleChange={this.handleChange} />
          <ContactList
            options={this.filteredData}
            onDeleteClick={this.onDeleteClick}
          />
        </Section>
      </>
    );
  }
}
