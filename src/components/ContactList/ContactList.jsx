import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import classes from './ContactList.module.css';
import {
  selectError,
  selectLoading,
  selectFilteredContacts,
} from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts) || [];
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

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
