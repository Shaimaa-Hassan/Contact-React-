import React, {useState} from 'react'
import './Listcontacts.css'
import prototyps from 'prop-types'
import search from '../Pictures/search.png'
import pcontact from '../Pictures/addcontact.jpg'
import { Link } from 'react-router-dom'


 function Listcontacts({contacts, ondeletecontact}) {
    // console.log(contacts);
    const [query, setQuery]= useState("");

    const updatequery= (e)=>{
      setQuery(e.target.value.trim())
    }
    const clearquery =()=>{
      setQuery("");
    }
    const showingcontacts= query===""? contacts : contacts.filter((contact)=>contact.title.toLowerCase().includes(query.toLowerCase()))
   
  return (
    <div className='list-contacts'>
      <div className='list-contacts-top'>
        <div>
     <img className='img-icon' src={search} alt='search'/>
     <input className='search-contacts' type='text' placeholder='search contacts' value={query}  onChange={updatequery}/>
        </div>
      <Link to='/create' className='add-contact'><img style={{width:40}} src={pcontact} alt='pcon' /></Link>
      </div>
      
      <div className='showing-contacts'>
        <span className='spanclearquery'>now showing {showingcontacts.length} of {contacts.length}</span>
        <button className='clear-query' onClick={clearquery}>show all</button>
      </div>
      {/*{console.log(query)}*/}
      <ol className='contact-list'>
 {showingcontacts.length? showingcontacts.map((contact)=><li key={contact.id} className='contact-list-item'>
<div><img className='imgcontact' style={{width:40}} src={contact.url} alt='img'/></div>
    <div className='contact-details'>
        <p>{contact.title}</p>
        {/*<p>{contact.body}</p>*/}
    </div>
    <button className='contact-remove' onClick={()=>ondeletecontact(contact.id)}></button>
    </li>):""}
    </ol>
    </div>
  )
}
Listcontacts.prototypes ={
  contacts:prototyps.array.isRequired,
  ondeletecontact:prototyps.func.isRequired
};
export default Listcontacts