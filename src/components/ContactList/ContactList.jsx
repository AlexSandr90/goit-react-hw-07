import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import classes from './ContactList.module.css';
import {
  selectedError,
  selectedLoading,
  selectFilteredContacts,
} from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts) || [];
  const loading = useSelector(selectedLoading);
  const error = useSelector(selectedError);

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
