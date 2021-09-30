import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem("contacts")) || [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  removeContactById = (id) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts.filter((contact) => contact.id !== id)],
    }));
  };

  onFilterInput = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  onAddNewContact = (contact) => {
    if (
      this.state.contacts.some((contactState) =>
        contactState.name.toLowerCase().includes(contact.name.toLowerCase())
      )
    ) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    this.setState((prev) => ({
      contacts: [
        ...prev.contacts,
        { name: contact.name, number: contact.number, id: uuidv4() },
      ],
    }));
  };

  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAddNewContact={this.onAddNewContact} />

          <h2>Contacts</h2>
          {this.state.contacts.length !== 0 && (
            <Filter
              onFilterInput={this.onFilterInput}
              filter={this.state.filter}
            />
          )}

          <ContactList
            contacts={this.state.contacts}
            filterValue={this.state.filter}
            removeContactById={this.removeContactById}
          />
        </div>
      </>
    );
  }
}

export default App;
