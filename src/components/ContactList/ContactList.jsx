import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import classes from './ContactList.module.css';
import { selectedContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectedContacts) || [];
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <ul className={classes.contactList}>
        {Array.isArray(contacts) &&
          contacts?.map((contact) => {
            return (
              <li className={classes.contact} key={contact.id}>
                <Contact {...contact} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ContactList;
