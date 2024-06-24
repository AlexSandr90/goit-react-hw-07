import './App.css';
import { ContactForm, ContactList, SearchBox } from '../index';

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default App;
