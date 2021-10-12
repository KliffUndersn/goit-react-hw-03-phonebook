import { useState, useEffect } from 'react';
import { v4 as generate } from 'uuid';
import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './FilterContacts/FilterContacts';
import useLocalStorage from '../../hooks/useLocalStorage'

const InputForm =() => {

 const [state,setState] = useState({
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    filter: '',
    number: ''
    
  })


  const [contacts, setContacts] = useLocalStorage('contacts', '');
  // const componentDidMount() {
  //   if (localStorage.getItem('ContactList')){
  // setState({contacts:JSON.parse(localStorage.getItem('ContactList'))})}
  // }

  // const componentDidUpdate(_, contactList) {
  //   localStorage.setItem('ContactList', JSON.stringify(state.contacts));
  // }
  


  const handleChange = ({ target }) => {
    setState({...state,
      [target.name]: target.value,
    });
   
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = state.contacts.map(e=> e.name)
    if (newName.includes(e.target.name.value)){return alert(`${e.target.name.value} says hello from chat`)}
    createContact();

  }
  const createContact = () => {
    
    const {name, number,contacts} = state
    const singleContact = {
      name,
      number,
      id: generate(),
    }
    setState({...state, contacts: [...contacts, singleContact]})
  }
  const filterContacts = (e) => {
    return state.contacts.filter((e) => e.name.toLowerCase().includes(state.filter))
  }

  const changiF1ilter = ({target}) => {
    setState({...state, filter:target.value})
  }
  const deleteContact = (id) => {
   setState((prevState)=>({...state, contacts:prevState.contacts.filter(e=>e.id !==id)}))
  }
 

    return (<>
        <form onSubmit={handleSubmit}>
          <h1>Phonebook</h1>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
          />
          <h2>Number</h2>
         <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
          />
          <button type="submit">Add contact</button>
          </form>
          
          <FilterContacts filtered={changiF1ilter} />
          
          <h3>Contacts</h3>
          <ContactList filteredContacts={filterContacts()} deleteContact={deleteContact}/>
        </>

    )
  
}

export default InputForm