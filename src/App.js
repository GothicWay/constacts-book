import React, { Component } from 'react';
import { Header, ContactsList, Modal } from './components';
import contacts from './assets/users.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact:{},
      visible: false,
      contactsArray: []
    };
    this.changeContact = this.changeContact.bind(this);
  }

  componentDidMount() {
    const contactsLocal = localStorage.getItem('contacts');
    if(!contactsLocal) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
      this.setState({ contactsArray: contacts });
    } else {
      this.setState({ contactsArray: JSON.parse(contactsLocal) });
    }
  }

  onClickContact = (contact = null) => {
    if(contact !== null) {
      this.setState({ visible: true, contact });
    }
  }

  changeContact = (data, key = null) => {
    if(key !== null) {
      const { contact } = this.state;
      const editableContact = {...contact}
      editableContact[key] = data.target.value;
      this.setState({ contact: editableContact });
    }
  }

  closeModal = () => {
    const { contact, contactsArray } = this.state;
    const tmpContact = [...contactsArray];
    tmpContact.forEach((item, i) => {
      if(item.id === contact.id) {
        tmpContact[i] = {...contact};
      }
    })
    this.setState({ contactsArray: tmpContact, visible: false });
    localStorage.setItem('contacts', JSON.stringify(tmpContact));
  }

  render() {
    const { contactsArray, visible, contact } = this.state;
    return (
      <div className="App">
        <Header />
        <ContactsList
          contactsArray={contactsArray}
          clickContact={this.onClickContact}
        />
        <Modal
          visible={visible}
          clickForClose={this.closeModal}
          contact={contact}
          changeContact={this.changeContact}
        />
      </div>
    );
  }
}

export default App;
