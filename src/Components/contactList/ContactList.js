import React from "react";
import ContactListItem from "./contactListItem/ContactListItem";

const ContactList = ({ contacts, filterValue, removeContactById }) => {
  const newArr = [...contacts].filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      {contacts.length !== 0 ? (
        <>
          {newArr.length !== 0 ? (
            <ul>
              {newArr.map((contact) => (
                <ContactListItem
                  key={contact.id}
                  contact={contact}
                  removeContactById={removeContactById}
                />
              ))}
            </ul>
          ) : (
            <p>There is no such contact ;(</p>
          )}
        </>
      ) : (
        <p>Please enter your first contact ;)</p>
      )}
    </>
  );
};

export default ContactList;
