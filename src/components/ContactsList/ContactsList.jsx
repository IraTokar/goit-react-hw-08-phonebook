import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "components/redux/contacts/operations";
import { selectVisibleContacts } from "components/redux/contacts/selectors";


const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);
    const dispatch = useDispatch();
   
    return (
        <div>
            <ul>
                {contacts && contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name + ': ' + contact.number}
                        {<button
                            type='button'
                            name='delete'
                            onClick={() => dispatch(deleteContact(contact.id))}
                            >delete</button>}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ContactList;
