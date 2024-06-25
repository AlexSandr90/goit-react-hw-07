import classes from './Contact.module.css';
import { BsFillPersonFill, BsTelephoneFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import CustomButton from '../CustomButton/CustomButton';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <div className={classes.contactInfo}>
        <div>
          <BsFillPersonFill />
          <span>{name}</span>
        </div>
        <div>
          <BsTelephoneFill />
          <span>{number}</span>
        </div>
      </div>
      <CustomButton
        buttonText={'Delete'}
        onClick={() => handleDeleteContact(id)}
      />
    </>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
