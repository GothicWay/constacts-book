import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imgClose from '../../assets/54528.svg';
import './modal.css';

export default class Modal extends Component {
  render() {
  	const { visible, clickForClose, contact, changeContact } = this.props;
  	if(!visible) {
  	  return null;
  	}

	return(
	  <div className="modal">
	   <div className="contact-editor">
	   	 <div onClick={clickForClose} className="btn-close">
	   	   <img src={imgClose} alt={'icon-close'} className="icon-close"/>
	   	 </div>
	   	 <div>
	     	<img src={contact.avatar} alt={''} className="view-avatar" />
	     </div>
	      <form>
	        <labe>
	         Name:
		     	<input
		     	  className="data-input"
		     	  type={'text'}
		     	  value={contact.name}
		     	  onChange={(event) => changeContact(event, 'name') }
		     	/>
		    </labe>
		    <br />
		    <labe>
	         Phone:
		     	<input
		     	  className="data-input"
		     	  type={'tel'}
		     	  value={contact.phone}
		     	  onChange={(event) => changeContact(event, 'phone') }
		     	/>
	     	</labe>
	     	<br />
	     	<labe>
	     	 E-mail:
		     	<input
		     	  className="data-input"
		     	  type={'email'}
		     	  value={contact.email}
		     	  onChange={(event) => changeContact(event, 'email') }
		     	/>
		     </labe>
		     <br />
		     <labe>
	         User Name:
		     	<input
		     	  className="data-input"
		     	  type={'text'}
		     	  value={contact.username}
		     	  onChange={(event) => changeContact(event, 'username') }
		     	/>
	     	</labe>
	     	<br />
	     	<labe>
	         Web-site:
		     	<input
		     	  className="data-input"
		     	  type={'text'}
		     	  value={contact.website}
		     	  onChange={(event) => changeContact(event, 'website') }
		     	/>
	     	</labe>
	     </form>
	   </div>
	  </div>
	);
  }
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  clickForClose: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
  changeContact: PropTypes.func.isRequired
}
