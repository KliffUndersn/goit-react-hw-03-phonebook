import PropTypes from "prop-types"

export const ContactList = ({filteredContacts, deleteContact }) => {
    return(<ul>{filteredContacts && filteredContacts.map(e => <li key={e.id}>{e.name} : {e.number} <button onClick={()=>deleteContact(e.id)}>Delete</button></li>)    }</ul>)
   
}

ContactList.propTypes={
    filteredContacts:PropTypes.arrayOf(Object).isRequired,
    deleteContact:PropTypes.func.isRequired,
  }