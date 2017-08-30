import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contactList.css';

export default class ContactList extends Component {
  render() {
  	const { contactsArray, clickContact } = this.props;
    const listItems = contactsArray
    .sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0)
    .map((contact) =>
      <li key={contact.id} onClick={() => clickContact(contact)} className="contact-view">
      	<div>
	      <p className="contact-name">{contact.name}</p>
	      <img src={contact.avatar}  alt={''} className="contact-avatar"></img>
	     </div>
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
}

ContactList.propTypes = {
  contactsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickContact: PropTypes.func.isRequired
}
