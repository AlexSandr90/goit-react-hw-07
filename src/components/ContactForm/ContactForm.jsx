import { ErrorMessage, Field, Form, Formik } from 'formik';
import classes from './ContactForm.module.css';
import CustomButton from '../CustomButton/CustomButton';
import { useId } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(12, 'Too Long!')
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Invalid phone number format. Expected format: 222-33-77'
    )
    .required('Required'),
});

const initialValue = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ id: Date.now().toString(), ...values }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={classes.contactForm}>
        <div className={classes.contactForm_Item}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage
            name="name"
            component="span"
            className={classes.error}
          />
        </div>
        <div className={classes.contactForm_Item}>
          <label htmlFor={numberId}>Number</label>
          <Field type="text" name="number" id={numberId} />
          <ErrorMessage
            name="number"
            component="span"
            className={classes.error}
          />
        </div>
        <CustomButton type="submit" buttonText={'Add Contact'} />
      </Form>
    </Formik>
  );
};

export default ContactForm;
